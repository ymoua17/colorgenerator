import React from 'react';

const Input = ({ color1, handleChange1, color2, handleChange2 }) => {
    return (
        <div>
            <h2>Inputs</h2>
            <input type="color" value={color1} onChange={handleChange1} />
            <input type="color" value={color2} onChange={handleChange2} />
        </div>
    )
}

export default Input;