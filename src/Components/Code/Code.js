import React from 'react';

class Code extends React.Component {
    render() {
        return (
            <div className="pv4">
                <span className="f3 fw6">Code: </span><span className="fw5 f3">{this.props.code}</span>
            </div>
        )
    }
}

export default Code;