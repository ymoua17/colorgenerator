import React from 'react';

class Code extends React.Component {
    render() {
        return (
            <div>
                <h2 className="f2 i">Copy Your Code</h2>
                <p className="">{this.props.code};</p>
            </div>
        )
    }
}

export default Code;