import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state={
    person:[
      {name:"Vimal",age:25},
      {name:"Danger Boy",age:26},
      {name:"Handler",age:27}
    ],
    otherState: "Vimal Pillai",
    showPerson:false
  }

  switchNameHandler = (newName) => {
    console.log("Clicked");
    this.setState({
      person:[
        {name:newName,age:25},
      {name:"Service",age:26},
      {name:"Rahul",age:27}
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      person:[
        {name:"Vimal",age:25},
      {name:"Node",age:26},
      {name:event.target.value,age:27}
      ]
    })
  }

  showPersonHandler = () => {
    const person = this.state.showPerson
    this.setState({showPerson:!person})
  }

  deletePersonHandler = (personIndex) => {
      const person = this.state.person
      person.splice(personIndex,1)
      this.setState({person:person})
  }

  render() {
    let style = {
      backgroundColor: "white",
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
   
    let person = null;
    if(this.state.showPerson){
     person = (
          <div>
          {
            this.state.person.map((hello,index) => {
              return <Person key={hello.index} name={hello.name} click={this.deletePersonHandler.bind(this,index)} age={hello.age} />
            })
          }
          </div>
        )
    }

  

    return (
      <div className="App">
        <p>Hi my name is vimal</p>
        <p>I learn ReactJS</p>
        <p>Vimal Pillai</p>
        <button style={style} onClick={this.showPersonHandler}>Switch Name</button>
        {person}      
      </div>
    );
  }
}

export default App;
