import React from 'react';
import Murashev_Element from './components.js';

class Murashev_Controller extends React.Component {
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
            <button onClick={ this.toggleDiv }> Мурашев А.С. </button>

            { this.state.show && <Murashev_Element/> }
        </div>)
    }
}

export default Murashev_Controller;