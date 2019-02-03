import React, { Component } from 'react';
import Colors from './Colors/Colors';
import Specifications from './Specifications/Specifications';
import Code from './Code/Code';
import './App.css';



const body = document.getElementById('gradient');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#FF0000",
      color2: "#3312FF",
      degree: 90
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.degreeChange = this.degreeChange.bind(this)
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
  degreeChange(event) {
    this.setState({
      degree: event.target.value
    })
  }

  render() {
    const { color1, color2, degree } = this.state;
    const changeBackground = (c1, c2, d) => {
      body.style.background = `linear-gradient(${d}deg, ${c1}, ${c2})`;	
  }
    changeBackground(color1, color2, degree);

    return (
      <div className="App">
        <h1>Color Generator</h1>
        <Colors color1={this.state.color1} handleChange1={this.handleChange1} color2={this.state.color2} handleChange2={this.handleChange2}/>
        <Specifications degree={this.state.degree} degreeChange={this.degreeChange} />
        <Code code={body.style.background}/>
      </div>
    );
  }
}

export default App;
