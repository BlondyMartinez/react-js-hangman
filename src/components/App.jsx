import React, { useState, useEffect } from "react";
import LetterChoices from "./letter_choices";
import Word from "./word"
import SecretWord from "../js/secret_word.js"
import Stage_0 from "../assets/stages/stage_0.png"
import Stage_1 from "../assets/stages/stage_1.png"
import Stage_2 from "../assets/stages/stage_2.png"
import Stage_3 from "../assets/stages/stage_3.png"
import Stage_4 from "../assets/stages/stage_4.png"
import Stage_5 from "../assets/stages/stage_5.png"
import Stage_6 from "../assets/stages/stage_6.png"

function App() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    const initializeWord = async () => {
      const secretWord = new SecretWord();
      await secretWord.initialize();
      setWord(secretWord);
    };

    initializeWord();
  }, []);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const [stage, setStage] = useState(0);
  const [stageSRC] = useState({
    0: Stage_0,
    1: Stage_1,
    2: Stage_2,
    3: Stage_3,
    4: Stage_4,
    5: Stage_5,
    6: Stage_6
  })


  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1>HANGMAN</h1>
      <div className="d-flex" style={{ width: "80vw" }}>
        <img className="stage" src={stageSRC[stage]} />
        <div className="d-flex flex-column gap-3 justify-content-around align-items-center w-100">
          {word && <Word word={word.display(correctLetters)} />}
          {word && <LetterChoices word={word} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} stage={stage} setStage={setStage} />}
        </div>
      </div>
    </div>
  );
}

export default App;