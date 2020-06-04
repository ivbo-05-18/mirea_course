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
      const { show } = this.state;
      return (
        <div className="">
          <button type="button" onClick={this.toggleDiv}> Ladoshkina D. I. </button>

          { show && <LadoshkinaDIElement /> }
        </div>
      );
    }
}

export default LadoshkinaDIController;
