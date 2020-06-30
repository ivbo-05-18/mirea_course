import React from 'react';
import ChernyshevVVElement from './ChernyshevVVElement';

class ChernyshevVVController extends React.Component {
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
          <button type="button" onClick={this.toggleDiv}> Чернышев В.В. </button>

          { show && <ChernyshevVVElement /> }
        </div>
      );
    }
}
export default ChernyshevVVController;
