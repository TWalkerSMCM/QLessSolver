// DictionarySelector.js
import React from "react";

const DictionarySelector = ({ dictionary, setDictionary }) => {
  const dictionaryOptions = [
    { value: "scrabble", label: "Scrabble" },
    { value: "nouns", label: "Simple Nouns" },
    { value: "top10k", label: "10k Most Common Words" },
  ];

  return (
    <select
      className="dictionary-select"
      onChange={(e) => setDictionary(e.target.value)}
      value={dictionary}
    >
      {dictionaryOptions.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DictionarySelector;
