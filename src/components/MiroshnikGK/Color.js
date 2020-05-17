import React, { Component } from 'react';
import Field from './Color/Field';
import Square from './Color/Square';
import hexToCMYK from './Color/hextocmyk';
import { StyleRoot } from 'radium'

class Color extends Component {

  state = {
    value: '',
    CMYK: '',
  };

  handleValueChange = (event) => {
    this.setState(
      {
        value: event.target.value,
        CMYK: hexToCMYK(event.target.value),
      }
    );
  }

  render() {
    return (
      <StyleRoot>
        <div className="Color">
          <Field id="field" value={this.state.value} changed={this.handleValueChange} />
          <Square id="square" value={this.state.value} CMYK={this.state.CMYK} />
        </div>
      </StyleRoot>
    );
  }
}
export default Color;
