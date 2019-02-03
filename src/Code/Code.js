import React from 'react';

class Code extends React.Component {
    render() {
        return (
            <div>
                <h2>Copy Your Code</h2>
                <p>{this.props.code};</p>
            </div>
        )
    }
}

export default Code;