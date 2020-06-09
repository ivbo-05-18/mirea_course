import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import Field from './Field';
import Square from './Square';
import hexToCMYK from './hextocmyk';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      CMYK: '',
    };
  }

  handleValueChange = (event) => {
    this.setState(
      {
        value: event.target.value,
        CMYK: hexToCMYK(event.target.value),
      },
    );
  }

  render() {
    const { value } = this.state;
    const { CMYK } = this.state;
    return (
      <StyleRoot>
        <div className="Color">
          <Field id="field" value={value} changed={this.handleValueChange} />
          <Square id="square" value={value} CMYK={CMYK} />
        </div>
      </StyleRoot>
    );
  }
}

export default Color;
