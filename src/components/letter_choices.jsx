import React, { useState } from "react";
import WrongImg from "../assets/wrong.png"
import CorrectImg from "../assets/correct.png"

const LetterChoices = (props) => {
    const [imgSRC, setImgSRC] = useState({});

    function handleClick(letter) {
        if (props.word.containsLetter(letter)) {
            props.setCorrectLetters([...props.correctLetters, letter]);
            setImgSRC((prevSrc) => ({ ...prevSrc, [letter]: CorrectImg }));
        } else {
            setImgSRC((prevSrc) => ({ ...prevSrc, [letter]: WrongImg }));
            props.setStage(props.stage + 1);
        }
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
                            >
                            {letter.toUpperCase()}
                            </button>
                            {imgSRC[letter] && <img className="position-absolute top-50 start-50 translate-middle" src={imgSRC[letter]} />} 
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default LetterChoices;