import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state={
    person:[
      {name:"Vimal",age:25},
      {name:"Danger Boy",age:26},
      {name:"Anusree",age:27}
    ],
    otherState: "Vimal Pillai"
  }

  switchNameHandler = (newName) => {
    console.log("Clicked");
    this.setState({
      person:[
        {name:newName,age:25},
      {name:"Soumya",age:26},
      {name:"Rahul",age:27}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      person:[
        {name:"Vimal",age:25},
      {name:"Priya",age:26},
      {name:event.target.value,age:27}
      ]
    })
  }


  render() {
    let style = {
      backgroundColor: "white",
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'

    }
    return (
      <div className="App">
        <p>Hi my name is vimal</p>
        <p>I learn ReactJS</p>
        <p>Vimal Pillai</p>
        <button style={style} onClick={this.switchNameHandler.bind(this,"Hello World")}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this,"Star Lord")}>I study at ignou</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} change={this.nameChangeHandler}/>
      </div>
    );
  }
}

export default App;
