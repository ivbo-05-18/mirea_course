import React from 'react';
import OleynikovAPElement from './OleynikovAPElement.js';

class OleynikovAPController extends React.Component {
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
            <button onClick={ this.toggleDiv }> Олейников А.П. </button>

            { this.state.show && <OleynikovAPElement/> }
        </div>)
    }
}

export default OleynikovAPController;