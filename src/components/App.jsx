import React, { useState, useEffect } from "react";
import LetterChoices from "./letter_choices";
import Word from "./word"
import SecretWord from "../js/secret_word.js"

function App() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    const initializeWord = async () => {
      const secretWord = new SecretWord();
      await secretWord.initialize(); // Wait for initialization to complete
      setWord(secretWord);
    };

    initializeWord();
  }, []);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);


  return (
    <div>
      <h1>HANGMAN</h1>
      {word && <Word word={word.display(correctLetters)} />}
      {word && <LetterChoices word={word} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} />}
    </div>
  );
}

export default App;