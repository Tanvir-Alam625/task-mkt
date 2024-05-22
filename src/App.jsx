import { useState } from "react";
import "./App.css";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    setOutputString((prev) => {
      const newString = prev + letter;
      const modifiedString = newString.replace(/(.)\1{2,}/g, (match) =>
        "_".repeat(match.length)
      );
      return modifiedString;
    });
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="app">
      <div className="grid">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString" className="output">
        {outputString}
      </div>
    </div>
  );
};

export default App;
