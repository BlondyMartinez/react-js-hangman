import React from "react";
import OnImg from "../assets/sound_on.png";
import OffImg from "../assets/sound_off.png";

const SoundController = (props) => {
    function handleClick() {
        props.setSound(props.sound == 'on' ? 'off' : 'on');
    }

    return (
        <button className="btn sound" onClick={handleClick}><img src={props.sound == 'on' ? OnImg : OffImg} /></button>
    );
}

export default SoundController;