import React from "react";

const Word = ({ word }) => {
    return (
        <div>
            {word.map((letter, index) => (
                <React.Fragment key={index}>
                    <span>{letter}</span>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Word;