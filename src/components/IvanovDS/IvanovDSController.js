import React from 'react';
import IvanovDSElement from './IvanovDSElement.js';

class IvanovDSController extends React.Component {
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
            <button id='IDS' onClick={ this.toggleDiv }>Иванов Д.С.</button>

            { this.state.show && <IvanovDSElement/> }
        </div>)
    }
}

export default IvanovDSController;