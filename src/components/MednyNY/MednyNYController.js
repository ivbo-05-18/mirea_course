import React from 'react';
import MednyNYElement from './MednyNYElement';

class МednyNYController extends React.Component {
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
          <button type="button" onClick={this.toggleDiv}> Медный Н.Ю. </button>
          { show && <MednyNYElement /> }
        </div>
      );
    }
}

export default МednyNYController;
