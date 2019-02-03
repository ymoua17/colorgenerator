import React from 'react';

const Specifications = ({ degree, degreeChange }) => {
    return (
        <div>
            <h2>Specifications</h2>
            <input type="number" value={degree} onChange={degreeChange} />
        </div>
    )
}

export default Specifications;