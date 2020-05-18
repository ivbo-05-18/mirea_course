import React from 'react';
import MurashevElement from './components';

class MurashevController extends React.Component {
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
          <button type="button" onClick={this.toggleDiv}> Мурашев А.С. </button>
          { show && <MurashevElement /> }
        </div>
      );
    }
}

export default MurashevController;
