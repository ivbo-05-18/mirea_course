/* eslint-disable react/button-has-type */
import React from 'react';
import Element from './KapyrinKAelement';

class KapyrinKAcontroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toogleEl = this.toogleEl.bind(this);
  }

  toogleEl(event) {
    const { show } = this.state;
    this.setState({ show: !show });
    event.preventDefault();
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.toogleEl}> Капырин К.А. </button>
        { show ? <Element /> : null}
      </div>
    );
  }
}

export default KapyrinKAcontroller;
