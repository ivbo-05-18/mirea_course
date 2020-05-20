import React from 'react';
import OleynikovAPElement from './OleynikovAPElement';

class OleynikovAPController extends React.Component {
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
        <div className="">
          <button type="button" onClick={this.toggleDiv}> Олейников А.П. </button>

          { show && <OleynikovAPElement /> }
        </div>
      );
    }
}

export default OleynikovAPController;
