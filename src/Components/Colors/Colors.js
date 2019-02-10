import React from 'react';
import { HuePicker } from 'react-color';

const Colors = ({ color1, handleChange1, color2, handleChange2 }) => {
    return (
        <div>
            <h2 className="f2 i">-Pick Your Colors</h2>
            <div className="flex flex-column items-center">
                <HuePicker className="ba b--black-80" color={color1} onChange={handleChange1} />
                <br/>
                <HuePicker className="ba b--black-80"color={color2} onChange={handleChange2} />
            </div>
        </div>
    )
}

export default Colors;