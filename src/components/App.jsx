import React, { useState, useEffect } from "react";
import LetterChoices from "./letter_choices";
import Word from "./word"
import SecretWord from "../js/secret_word.js"

function App() {
  const [word, setWord] = useState(new SecretWord());
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <div>
      <h1>HANGMAN</h1>
      {word && <Word word={word.display(correctLetters)} />}
      <LetterChoices />
    </div>
  );
}

export default App;