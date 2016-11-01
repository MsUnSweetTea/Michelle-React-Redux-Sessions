import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';


class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Header/>
        
        // <div className="App-Computer">
        //   {this.state.computers.map((computer) => {
        //   return <li key={computer.name}> This is a {computer.name} {computer.cost}</li>
        // })}
        // </div>
        <Counter/>
      </div>
    );
  }
}

export default App;
