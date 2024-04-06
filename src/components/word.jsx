import React, { useEffect } from "react";
import Letter from "./word_letter"

const Word = (props) => {
    return (
        <div>
            {props.word.map((letter, index) => (
                <React.Fragment key={index}>
                    <Letter letter={letter} />
                </React.Fragment>
            ))}
        </div>
    );
}

export default Word;