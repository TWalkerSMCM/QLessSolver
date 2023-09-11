//SolveButton.js
import React from "react";

const SolveButton = ({
  setIsLoading,
  isLoading,
  letters,
  dictionary,
  setSolution,
}) => {
  //No solution found

  const NO_SOLUTION = [
    [" ", "N", " ", " ", " ", " ", " ", " "],
    ["S", "O", "L", "U", "T", "I", "O", "N"],
  ];

  const ERROR_OCCURED = [
    [" ", " ", " ", " ", "O"],
    [" ", " ", " ", " ", "C"],
    [" ", " ", " ", " ", "C"],
    [" ", " ", " ", " ", "U"],
    ["E", "R", "R", "O", "R"],
    [" ", " ", " ", " ", "E"],
    [" ", " ", " ", " ", "D"],
  ];

  const trimNestedArray = (arr) => {
    var removal = false;

    //If all the letters are empty in the first nested array, remove it
    if (arr[0].every((letter) => letter === " ")) {
      arr.shift();
      removal = true;
    }

    //If all letters are empty in the last nested array, remove it
    if (arr[arr.length - 1].every((letter) => letter === " ")) {
      arr.pop();
      removal = true;
    }

    //If all letters are empty in the first column, remove it
    if (arr.every((row) => row[0] === " ")) {
      arr.forEach((row) => row.shift());
      removal = true;
    }

    //If all letters are empty in the last column, remove it
    if (arr.every((row) => row[row.length - 1] === " ")) {
      arr.forEach((row) => row.pop());
      removal = true;
    }

    if (removal) return trimNestedArray(arr);
    else return arr;
  };

  const handleSolve = async () => {
    //Fetch a solution solve
    setIsLoading(true);

    try {
      var response = await fetch(
        `https://us-central1-qlesssolver.cloudfunctions.net/solve?letters=${letters.join(
          ""
        )}&dict=${dictionary}/`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.hasOwnProperty("solution")) {
        const solution = trimNestedArray(data.solution);
        setSolution(solution);
      } else {
        setSolution(NO_SOLUTION);
      }
    } catch (error) {
      console.error(error);
      setSolution(ERROR_OCCURED);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="solve-button"
      onClick={handleSolve}
      disabled={isLoading || !letters.every((letter) => !!letter)}
    >
      Solve
    </button>
  );
};
export default SolveButton;
