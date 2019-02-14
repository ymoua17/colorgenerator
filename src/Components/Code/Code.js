import React from 'react';

class Code extends React.Component {
    render() {
        return (
            <div className="pv4">
                <span className="f2 fw6">Code:</span><span className="fw5 f4">{this.props.code}</span>
            </div>
        )
    }
}

export default Code;