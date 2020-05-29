import React from 'react';
import BurinISElement from './BurinISElement';

class BurinISController extends React.Component {
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
      <div className="BurinISDiv">
        <button type="button" onClick={this.toggleDiv}> Бурин </button>
        { show && <BurinISElement /> }
      </div>
    );
  }
}

export default BurinISController;
