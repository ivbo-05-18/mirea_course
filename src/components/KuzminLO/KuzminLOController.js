import React from 'react';
import KuzminLOElement from './KuzminLOElement';

class KuzminLOController extends React.Component {
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
      <div className="KuzminLODiv">
        <button type="button" onClick={this.toggleDiv}> Кузьмин Л.О. </button>
        { show && <KuzminLOElement /> }
      </div>
    );
  }
}

export default KuzminLOController;
