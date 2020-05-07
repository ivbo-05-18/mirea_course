import React from 'react';
import PerederiyVAElement from './PerederiyVAElement.js';

class PerederiyVAController extends React.Component {
    constructor ( props ) {
        super ( props )
        this.state = { show: false }
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState ( { show: !show } )
    }
    
    render() {
        return (<div className=''>
            <button onClick={ this.toggleDiv }> Передерий В.А. </button>

            { this.state.show && <PerederiyVAElement/> }
        </div>)
    }
}

export default PerederiyVAController;