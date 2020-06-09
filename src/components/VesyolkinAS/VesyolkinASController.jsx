import React from 'react';
import VesyolkinASElement from './VesyolkinASElement';

class VesyolkinASController extends React.Component {
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
          <button type="button" onClick={this.toggleDiv}>Весёлкин А. С.</button>
          { show && <VesyolkinASElement /> }
        </div>
      );
    }
}

export default VesyolkinASController;
