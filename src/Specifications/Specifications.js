import React from 'react';
import './Specifications.css';

const Specifications = ({ degree, degreeChange }) => {
    return (
        <div>
            <h2 className="f2 i">Specifications</h2>
            <input className="ba b--black-80 tc" type="number" value={degree} onChange={degreeChange} />
        </div>
    )
}

export default Specifications;