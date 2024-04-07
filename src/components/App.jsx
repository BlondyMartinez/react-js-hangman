import React, { useState, useEffect } from "react";
import LetterChoices from "./letter_choices";
import Word from "./word"
import Title from "./title"
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
  const [correctLetters, setCorrectLetters] = useState([]);
  const [letterFeedback, setLetterFeedback] = useState({});
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);

  const [stage, setStage] = useState(0);
  const STAGE = {
    0: Stage_0,
    1: Stage_1,
    2: Stage_2,
    3: Stage_3,
    4: Stage_4,
    5: Stage_5,
    6: Stage_6
  }

  function handleRestart(){
    setWord(new SecretWord());
    setStage(0);
    setCorrectLetters([]);
    setLetterFeedback({});
    setWin(false);
    setLoss(false);
  }


  useEffect(() => {
    const initializeWord = async () => {
      const secretWord = new SecretWord();
      await secretWord.initialize();
      setWord(secretWord);
    };

    initializeWord();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Title />
      <div className="d-flex" style={{ width: "80vw" }}>
        <img className="stage" src={STAGE[stage]} />
        <div className="d-flex flex-column gap-3 justify-content-around align-items-center w-100">
          {word && <Word word={word.display(correctLetters)} />}
          {word && <LetterChoices 
            word={word} 
            correctLetters={correctLetters} 
            setCorrectLetters={setCorrectLetters} 
            letterFeedback={letterFeedback}
            setLetterFeedback={setLetterFeedback}
            stage={stage} 
            setStage={setStage} 
            win={win}
            setWin={setWin}
            loss={loss}
            setLoss={setLoss}
          />}
        </div>
      </div>
    </div>
  );
}

export default App;