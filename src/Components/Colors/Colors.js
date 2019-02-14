import React from 'react';
import { HuePicker } from 'react-color';

const Colors = ({ color1, colorChange1, color2, colorChange2 }) => {
    return (
        <div>
            <h2 className="f2">Choose Your Colors</h2>
            <div className="flex flex-column items-center">
                <HuePicker className="ba b--black-80" color={color1} onChange={colorChange1} />
                <br/>
                <HuePicker className="ba b--black-80"color={color2} onChange={colorChange2} />
            </div>
        </div>
    )
}

export default Colors;