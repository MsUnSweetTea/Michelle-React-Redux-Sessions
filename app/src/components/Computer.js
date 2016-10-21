import React, { Component } from 'react';
import '../App.css';

class Computer extends Component {
  render() {
    return (
      <div className="Computer-Container">
          <h2>Here is your {this.props.thing}</h2>
      </div>
    );
  }
}

export default Computer;