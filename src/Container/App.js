import React, { Component } from 'react';
import Title from '../Components/Title/Title';
import RandomButton from '../Components/RandomButton/RandomButton';
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
    this.colorChange1 = this.colorChange1.bind(this);
    this.colorChange2 = this.colorChange2.bind(this);
    this.degreeChange = this.degreeChange.bind(this);
    this.randomButton = this.randomButton.bind(this);
  }
  colorChange1(color) {
    const r = color.rgb.r;
    const g = color.rgb.g;
    const b = color.rgb.b;
    this.setState({
      color1: `rgb(${r}, ${g}, ${b})`
    })
  }
  colorChange2(color) {
    const r = color.rgb.r;
    const g = color.rgb.g;
    const b = color.rgb.b;
    this.setState({
      color2: `rgb(${r}, ${g}, ${b})`
    })
  }
  degreeChange(event) {
    this.setState({
      degree: event.target.value
    })
  }
  randomButton() {
    let degreeVal = Math.floor((Math.random() * 360) + 1);
    let rgbArr1 = [];
    let rgbArr2 = [];
    let i = 0;
    while (i < 3) {
      rgbArr1.push(Math.floor((Math.random() * 255) + 1));
      rgbArr2.push(Math.floor((Math.random() * 255) + 1));
      i++;
    }
    this.setState({
      color1: `rgb(${rgbArr1[0]}, ${rgbArr1[1]}, ${rgbArr1[2]})`,
      color2: `rgb(${rgbArr2[0]}, ${rgbArr2[1]}, ${rgbArr2[2]})`,
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
        <Title />
        <RandomButton randomButton={this.randomButton} />
        <Colors color1={this.state.color1} colorChange1={this.handleChange1} color2={this.state.color2} colorChange2={this.handleChange2}/>
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
