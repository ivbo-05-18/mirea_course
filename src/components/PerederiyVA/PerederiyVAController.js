import React from 'react';
import PerederiyVAElement from './PerederiyVAElement';

class PerederiyVAController extends React.Component {
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
          <button type="button" onClick={this.toggleDiv}> Передерий В.А. </button>
          { show && <PerederiyVAElement /> }
        </div>
      );
    }
}

export default PerederiyVAController;
