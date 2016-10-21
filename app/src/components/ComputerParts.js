import React, { Component } from 'react';
import '../App.css';

class ComputerParts extends Component {
  render() {
    return (
      <div className="ComputerParts-Container">
          <p> Yo. That {this.props.partname} tho. </p>
      </div>
    );
  }
}

export default ComputerParts;