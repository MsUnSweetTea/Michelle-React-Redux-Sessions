import React, { Component } from 'react';
import '../App.css';
import Computer from './Computer';
import ComputerParts from './ComputerParts'

class Header extends Component {
  render() {
  	return (
  		<div>
			<div className="App-header">
	          <h2>Welcome M-Dizzle</h2>
	          <Computer thing={"computer parts!"}/>
	        </div>
	        <div className="App-intro">
	          <ComputerParts partname={"i7 core"}/>
	          To get started, edit <code>src/App.js</code> and save to reload.
	        </div>
        </div>
       );
   }
}
export default Header;