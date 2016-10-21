import React, { Component } from 'react';
import './App.css';
import Computer from './components/Computer';
import ComputerParts from './components/ComputerParts'



class App extends Component {
  constructor() {
    super()
    this.state = {
      isFetchingData: true,
      computers: [
        {
          name: "Dell", 
          cost:"$1600"
        },
        //pass .state to another component, loop over array of objects and each time return a computer component by using mapping
        {
          name: "Sony",
          cost: "$160000"
        }, 
        {
          name: "Custom",
          cost:"$500"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome M-Dizzle</h2>
          <Computer thing={"computer parts!"}/>
        </div>
        <div className="App-intro">
          <ComputerParts partname={"i7 core"}/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
        <div className="App-Computer">
          {this.state.computers.map((computer) => {
          //add 'key' wiff JS thing when have listed items
          return <li key={computer.name}> This is a {computer.name} {computer.cost}</li>
        })}
        </div>
      </div>
    );
  }
}

export default App;
