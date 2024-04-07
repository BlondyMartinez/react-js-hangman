import React from "react";
import { Howl, Howler } from 'howler';
import WrongImg from "../assets/wrong.png"
import CorrectImg from "../assets/correct.png"
import ChalkSound from "../assets/sound/chalk2.mp3"

const LetterChoices = (props) => {
    const { word,
        correctLetters,
        setCorrectLetters,
        letterFeedback,
        setLetterFeedback,
        stage,
        setStage,
        win,
        loss, } = props;

    function handleClick(letter) {
        if (word.containsLetter(letter)) {
            playSound(() => {
                setCorrectLetters([...correctLetters, letter]);
                setLetterFeedback((prevSrc) => ({ ...prevSrc, [letter]: CorrectImg }));
            });
        } else {
            setLetterFeedback((prevSrc) => ({ ...prevSrc, [letter]: WrongImg }));
            setStage(stage + 1);
        }
    }

    function playSound(callback) {
        const sound = new Howl({
            src: [ChalkSound],
            onend: () => {
                if (callback) {
                    callback();
                }
            }
        });
        sound.play();
    };

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
                                disabled={letterFeedback[letter] || loss || win ? true : false}
                            >
                            {letter.toUpperCase()}
                            </button>
                            {letterFeedback[letter] && <img className="position-absolute top-50 start-50 translate-middle" src={letterFeedback[letter]} />} 
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default LetterChoices;