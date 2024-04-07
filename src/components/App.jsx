import React, { useState, useEffect } from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import { Howl } from 'howler';
// components
import LetterChoices from "./letter_choices";
import Word from "./word"
import Title from "./title"
import SoundController from "./sound_controller";
// classes
import SecretWord from "../js/secret_word.js";
// images
import RestartIMG from "../assets/restart.png";
import Stage_0 from "../assets/stages/stage_0.png";
import Stage_1 from "../assets/stages/stage_1.png";
import Stage_2 from "../assets/stages/stage_2.png";
import Stage_3 from "../assets/stages/stage_3.png";
import Stage_4 from "../assets/stages/stage_4.png";
import Stage_5 from "../assets/stages/stage_5.png";
import Stage_6 from "../assets/stages/stage_6.png";
// sounds
import WinSound from "../assets/sound/win.mp3";
import LossSound from "../assets/sound/loss.mp3";

function App() {
  const [word, setWord] = useState(null);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [letterFeedback, setLetterFeedback] = useState({});
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [stage, setStage] = useState(0);
  const [sound, setSound] = useState('on');

  const STAGE = {
    0: Stage_0,
    1: Stage_1,
    2: Stage_2,
    3: Stage_3,
    4: Stage_4,
    5: Stage_5,
    6: Stage_6
  }

  const winSound = new Howl({
    src: [WinSound]
  });

  const lossSound = new Howl({
    src: [LossSound]
  });

  function checkForWin() {
    if (word && word.isGuessCorrect(word.display(correctLetters))) {
      setWin(true);
      if(sound == "on") winSound.play();
    }
  }

  function checkForLoss() {
    if (stage == 6) {
      setLoss(true);
      if(sound == "on") lossSound.play();
    }
  }

  useEffect(() => {
    initializeWord();
  }, []);

  useEffect(() => {
      checkForLoss();
  }, [stage]); 

  useEffect(() => {
      checkForWin();
  }, [correctLetters]); 

  function handleRestart(){
    initializeWord();
    setStage(0);
    setCorrectLetters([]);
    setLetterFeedback({});
    setWin(false);
    setLoss(false);
  }

  const initializeWord = async () => {
    const secretWord = new SecretWord();
    await secretWord.initialize();
    setWord(secretWord);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Title />
      {win && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600} />}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-10 col-sm-10 d-flex justify-content-center align-items-center"><img className="stage" src={STAGE[stage]} /></div>
          <div className="col-lg-4 col-md-10 col-sm-10 d-flex flex-column gap-3 justify-content-around align-items-center">
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
              loss={loss}
              sound={sound}
            />}
            <div className="d-flex">
              <button onClick={handleRestart} className="btn restart"><img src={RestartIMG} /></button>
              <SoundController sound={sound} setSound={setSound} />
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/blondy-martinez/" target="_blank" className="p-4 text-center footer">By Blondy Martinez</a>
    </div>
  );
}

export default App;