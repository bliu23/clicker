import React, { Component } from 'react';
import './Button.css';



class Button extends Component {
  render() {
    return (     
      <div className="Button">
        <button onClick={this.props.onBtnClick} className= {this.props.choice + ' btn'}>{this.props.choice}</button>
      </div>
    );
  }
}

export default Button;
