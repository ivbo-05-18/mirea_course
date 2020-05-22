import React from 'react';
import VyrupaevaMAElement from './VyrupaevaMAElement';

// !!! add tests !!!

class VyrupaevaMAController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

    toggleDiv = () => {
      const { show } = this.state;
      this.setState({ show: !show });
    }

    render() {
      const { show } = this.state;
      return (
        <div>
          <button type="button" onClick={this.toggleDiv}> Вырупаева М.А. </button>
          { show && <VyrupaevaMAElement /> }
        </div>
      );
    }
}

export default VyrupaevaMAController;
