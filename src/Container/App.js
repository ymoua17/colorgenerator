import React, { Component } from 'react';
import Colors from '../Components/Colors/Colors';
import Specifications from '../Components/Specifications/Specifications';
import Code from '../Components/Code/Code';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import 'tachyons';


// Update background color part 1.
const body = document.getElementById('gradient');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "rgb(255, 0, 0)",
      color2: "rgb(0, 0, 255)",
      degree: 0,
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.degreeChange = this.degreeChange.bind(this);
    this.randomButton = this.randomButton.bind(this);
  }
  handleChange1(color) {
    this.setState({
      color1: color.hex
    })
  }
  handleChange2(color) {
    this.setState({
      color2: color.hex
    })
    console.log(color.hex)
  }
  degreeChange(event) {
    this.setState({
      degree: event.target.value
    })
  }
  randomButton() {
    let degreeVal = Math.floor((Math.random() * 360) + 1);
    let colorArr1 = [];
    let colorArr2 = [];
    let i = 0;
    while (i < 3) {
      colorArr1.push(Math.floor((Math.random() * 255) + 1));
      colorArr2.push(Math.floor((Math.random() * 255) + 1));
      i++;
    }
    this.setState({
      color1: `rgb(${colorArr1[0]}, ${colorArr1[1]}, ${colorArr1[2]})`,
      color2: `rgb(${colorArr2[0]}, ${colorArr2[1]}, ${colorArr2[2]})`,
      degree: degreeVal
    })
  }

  render() {

    // Update background part 2.
    const { color1, color2, degree } = this.state;
    let codeCopy = "";
    const changeBackground = (c1, c2, d) => {
      codeCopy = `linear-gradient(${d}deg, ${c1}, ${c2})`
      body.style.background = `linear-gradient(${d}deg, ${c1}, ${c2}) 0% 0% / cover no-repeat fixed`;
  }
    changeBackground(color2, color1, degree);

    return (
      <div className="App pv2">
        <h1 className="f1 underline">Color Generator</h1>
        <button className="grow dib pointer dim pa2 fw6" onClick={this.randomButton}>Randmonize!</button>
        <Colors color1={this.state.color1} handleChange1={this.handleChange1} color2={this.state.color2} handleChange2={this.handleChange2}/>
        <Specifications degree={this.state.degree} degreeChange={this.degreeChange} />
        <Code code={codeCopy}/>
        <div className="pb4">
          <CopyToClipboard text={codeCopy}>
            <button className="grow dib pointer pa2 fw6">Copy to clipboard!</button>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default App;
