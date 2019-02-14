import React from 'react';
import './Specifications.css';

const Specifications = ({ degree, degreeChange }) => {
    return (
        <div>
            <h2 className="f2">Enter a Value</h2>
            <input className="ba b--black-80 tc" min="0" max="360" type="number" value={degree} onChange={degreeChange} />
        </div>
    )
}

export default Specifications;