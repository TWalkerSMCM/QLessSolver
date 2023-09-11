import React, { useEffect, useState } from "react";
import "../css/GameBoard.css";
import DiceRollLoading from "./DiceRollLoading";

const GameBoard = ({ solution, isLoading }) => {
  //Based on the solution render a board

  //Scripted CSS so that the total width/height of the board is constant regardless of the number of rows/columns
  const totalRows = solution.length;
  const totalCols = solution[0].length;

  const boardSize = Math.max(totalRows, totalCols);

  const computeWidth = () => {
    const lowerWidthBound = 600;
    const upperWidthBound = 1920;

    const lowerPercentBound = 55;
    const upperPercentBound = 30;

    const slope = (upperPercentBound - lowerPercentBound) / (upperWidthBound - lowerWidthBound);
    const intercept = lowerPercentBound - slope * lowerWidthBound;

    return slope * window.innerWidth + intercept;
  }
  
  const [totalPercent, setTotalPercent] = useState(computeWidth());

  

  
  //Make this responsive
  useEffect(() => {
    window.addEventListener("resize", () => {setTotalPercent(computeWidth())});
    return () => {
      window.removeEventListener("resize", () => {setTotalPercent(computeWidth())});
    };
  }, []);

  var cellPercent = totalPercent / boardSize;

  var cellStyle = {
    width: `${cellPercent}vw`,
    height: `${cellPercent}vw`,
    fontSize: `${cellPercent / 2}vw`,
  };

  return (
    <>
      <div className="game-board">
        {isLoading && <DiceRollLoading solution={solution} />}
        {!isLoading &&
          solution.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((letter, colIndex) => (
                <div
                  className={
                    !!letter && letter !== " " ? "cell filled-cell" : "cell"
                  }
                  key={colIndex}
                  style={cellStyle}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default GameBoard;
