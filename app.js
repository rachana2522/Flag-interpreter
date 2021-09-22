import "./styles.css";
import React, { useState } from "react";

export default function App() {
  // flag data
  const flagData = {
    "🏁": "Chequered Flag",
    "🚩": "Triangular Flag",
    "🎌": "Crossed Flags",
    "🏴": "Black Flag",
    "🏳️": "White Flag",
    "🏳️‍🌈": "Rainbow Flag",
    "🏴‍☠️": "Pirate Flag",
    "🏳️‍⚧️": " Transgender Flag",
    "🇺🇳": "United Nations",
    "🇮🇳": "India"
  };

  const flags = Object.keys(flagData);

  const [output, setOutput] = useState("");

  function handleInput(e) {
    const userInput = e.target.value;

    if (userInput in flagData) {
      setOutput(flagData[userInput]);
    } else if (userInput === "") {
      setOutput("");
    } else {
      setOutput("We don't have this flag in our database.");
    }
  }

  function flagClickHandler(flag) {
    setOutput(flagData[flag]);
  }

  return (
    <div className="App">
      <h1>Flag Interpreter</h1>

      <input type="text" onChange={handleInput} placeholder="Insert Flag" />
      <div className="output">{output}</div>

      <p>Flags we know about</p>
      <ul>
        {flags.map((flag) => {
          return (
            <li key={flag} onClick={() => flagClickHandler(flag)}>
              {flag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
