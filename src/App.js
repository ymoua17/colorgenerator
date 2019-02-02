import React, { Component } from 'react';
import Inputs from './Inputs/Inputs';
import './App.css';



const body = document.getElementById('gradient');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#FF0000",
      color2: "#3312FF"
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange1(event) {
    this.setState({
      color1: event.target.value
    })
  }
  handleChange2(event) {
    this.setState({
      color2: event.target.value
    })
  }

  render() {
    const { color1, color2 } = this.state;
    const backGround = (first, second) => {
      body.style.background = "linear-gradient(to left, " + first + ", " + second + ")";	
  }
    backGround(color2, color1);

    return (
      <div className="App">
        <h1>Color Generator</h1>
        <Inputs color1={this.state.color1} handleChange1={this.handleChange1} color2={this.state.color2} handleChange2={this.handleChange2}/>
        {/* <Output /> */}
      </div>
    );
  }
}

export default App;
