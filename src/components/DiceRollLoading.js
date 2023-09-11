//DiceRollLoading.js
import { useEffect, useState } from "react";
import "../css/DiceRollLoading.css";

const DiceRollLoading = (solution) => {
  const possibleDice = [
    ["T", "T", "W", "H", "H", "P"],
    ["P", "F", "P", "G", "K", "V"],
    ["D", "G", "G", "L", "R", "R"],
    ["H", "R", "N", "H", "R", "N"],
    ["A", "A", "O", "O", "E", "E"],
    ["M", "M", "B", "L", "L", "Y"],
    ["K", "N", "S", "B", "Z", "X"],
    ["I", "I", "N", "N", "O", "Y"],
    ["L", "L", "D", "F", "R", "W"],
    ["T", "T", "C", "C", "S", "M"],
    ["U", "I", "O", "U", "A", "E"],
    ["C", "C", "B", "T", "J", "D"],
  ];

  const [die, setDie] = useState(
    possibleDice[Math.floor(Math.random() * possibleDice.length)]
  );

  //Only rerender when isLoading changes
  useEffect(() => {
    setDie(possibleDice[Math.floor(Math.random() * possibleDice.length)]);
  }, [solution]);

  return (
    <div className="loading-container">
      <div className="rolling-dice">
        <div className="dice">
          {die.map((letter, index) => (
            <div className="face" key={index}>
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiceRollLoading;
