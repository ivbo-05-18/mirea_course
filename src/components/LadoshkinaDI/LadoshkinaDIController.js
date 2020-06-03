import React from 'react';
import LadoshkinaDIElement from './LadoshkinaDIElement';

class LadoshkinaDIController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

    toggleDiv = () => {
      const { show } = this.state;
      this.setState({ show: !show });
    }

    render() {
      return (
        <div className="">
          <button type="button" onClick={this.toggleDiv}> Ladoshkina D. I. </button>

          { this.state.show && <LadoshkinaDIElement /> }
        </div>
      );
    }
}

export default LadoshkinaDIController;
