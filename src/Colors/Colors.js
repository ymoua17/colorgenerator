import React from 'react';
import { ChromePicker } from 'react-color';

const Colors = ({ color1, handleChange1, color2, handleChange2 }) => {
    return (
        <div>
            <h2>Pick Your Colors</h2>
            <ChromePicker color={color1} onChangeComplete={handleChange1} />
            <ChromePicker color={color2} onChangeComplete={handleChange2} />
        </div>
    )
}

export default Colors;