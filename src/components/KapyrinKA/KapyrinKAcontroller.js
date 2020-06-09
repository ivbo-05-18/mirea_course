import React from 'react';
import Element from './KapyrinKAelement';

class KapyrinKAcontroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.toogleEl = this.toogleEl.bind(this);
  }

  toogleEl() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button type="submit" onClick={this.toogleEl}> Капырин К.А. </button>
        { show ? <Element /> : null}
      </div>
    );
  }
}

export default KapyrinKAcontroller;
