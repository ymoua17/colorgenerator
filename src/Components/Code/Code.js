import React from 'react';

class Code extends React.Component {
    render() {
        return (
            <div>
                <h2 className="f2 i">-Copy Your Code</h2>
                <h3 className="pa2">{this.props.code};</h3>
            </div>
        )
    }
}

export default Code;