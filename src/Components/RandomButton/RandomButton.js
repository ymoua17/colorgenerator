import React from 'react';
import colorWheel from './colorwheel.png';
import './colorwheel.css';

const RandomButton = ({ randomButton }) => {
    return(
        <div>
            <img src={colorWheel} alt="randominze!" className="size pointer pa2 fw6 shadow-5" onClick={randomButton} />
            <p className="fw6">Click the rotating color wheel!</p>
        </div>
        
    )
}

export default RandomButton;