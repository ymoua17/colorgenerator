import React from 'react';
import { HuePicker } from 'react-color';

const Colors = ({ color1, handleChange1, color2, handleChange2 }) => {
    return (
        <div>
            <h2>Pick Your Colors</h2>
            <HuePicker color={color1} onChange={handleChange1} />
            <br/>
            <HuePicker color={color2} onChange={handleChange2} />
        </div>
    )
}

export default Colors;