import React, { Component } from 'react';
import logo from './acmlogo.png';
import './App.css';
import Button from './Button.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      yesClick: 0,
      noClick: 0
    };
  }

  handleYesClick = () => {
    this.setState({yesClick: 1, noClick: 0});
  }
  handleNoClick = () =>{
    this.setState({noClick: 1, yesClick: 0})
  }

  display = () => {
    console.log('Yes click', this.state.yesClick, 'No click', this.state.noClick);
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Do you understand this part?</h2>
        </div>
        <Button onBtnClick={this.handleYesClick} choice="Yes"/>
        <Button onBtnClick={this.handleNoClick} choice="No"/>
    
        <p>Yes clicks: {this.state.yesClick}</p>
        <p>No clicks: {this.state.noClick}</p>
      </div>

      // <div>
      //   {/* Notice how we're passing a function as a prop to ChildComponent */}
      //   <Button onMagicClick={this.handleYesClick} />
      //   <Button onMagicClick={this.handleNoClick} />
      // </div>
    );
  }
}

export default App;
