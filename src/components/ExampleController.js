import React from 'react';
import ExampleElement from './ExampleElement';

class ExampleController extends React.Component {
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
      <div className="ExampleDiv">
        <button type="button" onClick={this.toggleDiv}> Example </button>
        { show && <ExampleElement /> }
      </div>
    );
  }
}

export default ExampleController;
