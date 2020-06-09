import React from 'react';
import KorneevDSElement from './KorneevDSElement';

export default class KorneevDSController extends React.Component {
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
          <button type="button" onClick={this.toggleDiv}> Корнеев Д.С. </button>
          { show && <KorneevDSElement /> }
        </div>
      );
    }
}
