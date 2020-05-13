import React from 'react';
import MurashevElement from './components.js';

class MurashevController extends React.Component {
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

            { this.state.show && <MurashevElement/> }
        </div>)
    }
}

export default MurashevController;