import React from 'react';
import './Title.css';

const Title = () => {
    return (
        <div className="pb4">
            <h1 className="f1 underline">
                <span className="red">C</span>
                <span className="orange">o</span>
                <span className="gold">l</span>
                <span className="yellow">o</span>
                <span className="green">r </span>
                <span className="light-green">G</span>
                <span className="light-blue">e</span> 
                <span className="blue">n</span>
                <span className="dark-blue">e</span>
                <span className="purple">r</span>
                <span className="light-purple">a</span>
                <span className="hot-pink">t</span>
                <span className="dark-pink">o</span>
                <span className="dark-red">r</span>
            </h1>
            <a href="https://github.com/ymoua17/colorgenerator" target="blank" className="fw6 black no-underline dim">Created by ymoua17.</a>
        </div>
    )
}

export default Title;