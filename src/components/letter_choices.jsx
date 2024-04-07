import React, { useState } from "react";
import WrongImg from "../assets/wrong.png"
import CorrectImg from "../assets/correct.png"

const LetterChoices = (props) => {
    function handleClick(letter) {
        if (props.word.containsLetter(letter)) {
            props.setCorrectLetters([...props.correctLetters, letter]);
            props.setLetterFeedback((prevSrc) => ({ ...prevSrc, [letter]: CorrectImg }));
        } else {
            props.setLetterFeedback((prevSrc) => ({ ...prevSrc, [letter]: WrongImg }));
            props.setStage(props.stage + 1);
        }

        checkForWin();
        checkForLoss();
    }

    function checkForWin() {
        if (props.word.isGuessCorrect(word.display(correctLetters))) props.setWin(true);
    }

    function checkForLoss() {
        if (props.stage == 6) props.setLoss(true);
    }

    const LETTERS = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"]
    ];

    return (
        <div className="letter-choices d-flex flex-column">
            {LETTERS.map((row, rowIndex) => (
                <div key={rowIndex} className="w-100 d-flex justify-content-around">
                    {row.map((letter, index) => (
                        <div key={index} className="position-relative">
                            <button
                                onClick={() => handleClick(letter)}
                                style={{ position: "relative", zIndex: 0 }}
                                disabled={props.letterFeedback[letter] || props.loss || props.win ? true : false}
                            >
                            {letter.toUpperCase()}
                            </button>
                            {props.letterFeedback[letter] && <img className="position-absolute top-50 start-50 translate-middle" src={props.letterFeedback[letter]} />} 
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default LetterChoices;