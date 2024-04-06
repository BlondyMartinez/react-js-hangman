import React from "react";

const LetterChoices = () => {
    return (
        <div className="letter-choices d-flex flex-column">
            <div className="w-100 d-flex justify-content-around">
                <button>Q</button>
                <button>W</button>
                <button>E</button>
                <button>R</button>
                <button>T</button>
                <button>Y</button>
                <button>U</button>
                <button>I</button>
                <button>O</button>
                <button>P</button>
            </div>
            <div className="w-100 d-flex justify-content-around">
                <button>A</button>
                <button>S</button>
                <button>D</button>
                <button>F</button>
                <button>G</button>
                <button>H</button>
                <button>J</button>
                <button>K</button>
                <button>L</button>
            </div>
            <div className="w-100 d-flex justify-content-around">
                <button>Z</button>
                <button>X</button>
                <button>C</button>
                <button>V</button>
                <button>B</button>
                <button>N</button>
                <button>M</button>
            </div>
        </div>
    );
}

export default LetterChoices;