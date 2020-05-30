import React from 'react';
import KarpikAAElement from './KarpikAAElement';

class KarpikAAController extends React.Component {
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
        <button type="button" onClick={this.toggleDiv}> Карпик А.А. </button>
        { show && <KarpikAAElement /> }
      </div>
    );
  }
}

export default KarpikAAController;
