import React from "react";

const Word = ({ word }) => {
    return (
        <div className="word d-flex gap-2">
            {word.map((letter, index) => (
                <React.Fragment key={index}>
                    <span>{letter}</span>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Word;