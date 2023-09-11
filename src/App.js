// src/App.js
import React from "react";
import "./css/App.css";
import GameBoard from "./components/GameBoard";
import RackInput from "./components/RackInput";
import SolveButton from "./components/SolveButton";
import DictionaryInput from "./components/DictionaryInput";
import Header from "./components/Header";
import { useState } from "react";

import './fonts/AsapCondensed-SemiBold.ttf';

function App() {
  const defaultSolution = [
    ["", "", "Q", "", "", ""],
    ["", "", "~", "", "", ""],
    ["S", "O", "L", "V", "E", "R"],
    ["", "", "E", "", "", ""],
    ["", "", "S", "", "", ""],
    ["", "", "S", "", "", ""],
  ];

  const [letters, setLetters] = useState(Array(12).fill(""));
  const [solution, setSolution] = useState(defaultSolution);
  const [isLoading, setIsLoading] = useState(false);
  const [dictionary, setDictionary] = useState("scrabble");

  return (
    <div className="App">
      <Header></Header>
      <GameBoard solution={solution} isLoading={isLoading} />
      <RackInput letters={letters} setLetters={setLetters}>
        <DictionaryInput
          dictionary={dictionary}
          setDictionary={setDictionary}
        />
        <SolveButton
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          letters={letters}
          dictionary={dictionary}
          setSolution={setSolution}
        />
      </RackInput>
    </div>
  );
}

export default App;
