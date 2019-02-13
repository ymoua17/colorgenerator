import React from 'react';
import colorWheel from './colorwheel.png';
import './colorwheel.css';

const RandomButton = ({ randomButton }) => {
    return(
        <img src={colorWheel} alt="randominze!" className="size pointer pa2 fw6 shadow-4" onClick={randomButton} />
    )
}

export default RandomButton;