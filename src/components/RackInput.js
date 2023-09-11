// src/ScrabbleGame.js
import "../css/RackInput.css";

const RackInput = ({ children, letters, setLetters, setSolution }) => {
  const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const placeHolder = "ENTER DICE  "
  const onPaste = (e, index) => {
    e.preventDefault();

    const text = e.clipboardData.getData("text/plain").toUpperCase();
    const filteredText = text.split("").filter((letter) => {
      return validLetters.indexOf(letter) !== -1;
    });

    //Replace all the letters in the rack after the current index
    const newLetters = [...letters];
    for (var i = index; i < newLetters.length; i++) {
      newLetters[i] = filteredText[i - index];
    }

    //Update focused input
    var nextInput = Math.min(filteredText.length + index, newLetters.length - 1);
    const input = document.getElementsByTagName("input")[nextInput];
    input.focus();

    setLetters(newLetters);
  };

  const handleKeyDown = (e, index) => {
    if (e.metaKey || e.ctrlKey) return;

    const newLetters = [...letters];
    newLetters[index] = e.target.value.toUpperCase();
    setLetters(newLetters);

    if (e.key === "Backspace") {
      //Update the current input to be blank
      newLetters[index] = "";
      if (index > 0) {
        const previousInput = document.getElementsByTagName("input")[index - 1];
        previousInput.focus();
      }
    } else if (validLetters.indexOf(e.key.toUpperCase()) !== -1) {
      //Update the current input and shift focus to the next input
      newLetters[index] = e.key.toUpperCase();
      const nextInput = document.getElementsByTagName("input")[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div className="scrabble-game">
      <div className="form-container">
        <form>
          <div className="scrabble-form">
          {letters.map((letter, index) => (
            <input
              className="die-input"
              style={{ opacity: letter ? 1 : 0.5}}
              key={index}
              type="text"
              maxLength="1"
              value={letter}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onChange={(e) => e.preventDefault()}
              onPaste={(e) => onPaste(e, index)}
              placeholder={placeHolder[index]}
              {...(index === 0 && { autoFocus: true })}
            />
          ))}
          </div>
          {children}
        </form>
      </div>
    </div>
  );
};

export default RackInput;
