import React from 'react';
import colorWheel from './colorwheel.png';
import './colorwheel.css';

const RandomButton = ({ randomButton }) => {
    return(
        <div>
            <img src={colorWheel} alt="randominze!" className="size pointer pa2 fw6 shadow-5" onClick={randomButton} />
            <div className="intro">
                <p className="fw6 f5">Customize to your own liking or click on the spinning color wheel!</p>
            </div>

        </div>
        
    )
}

export default RandomButton;