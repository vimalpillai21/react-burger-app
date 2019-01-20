import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    let style = {color : "red",fontSize:"35px",backgroundColor:"cyan",}
    return (
      <div className="App">
        <p>Hi my name is vimal</p>
        <p>I learn ReactJS</p>
        <p>Vimal Pillai</p>
        <p style={style}>Hello</p>
      </div>
    );
  }
}

export default App;
