import React from "react";

const LetterChoices = (props) => {

    function handleClick(letter) {
        if (props.word.containsLetter(letter)) {
            props.setCorrectLetters([...props.correctLetters, letter]);
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
                        <button key={index} onClick={() => handleClick(letter)}>
                        {letter.toUpperCase()}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default LetterChoices;