import React, {Component} from 'react';

class ExampleController extends React.Component {
    constructor ( props ) {
        super ( props )
        this.state = { show: true }
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState ( { show: !show } )
    }
    
    render() {
        return (<div className='ExampleDiv'>
            <button onClick={ this.toggleDiv }> Toggle Element </button>

            { this.state.show && <ExampleElement/> }
        </div>)
    }
}

class ExampleElement extends React.Component {
    render(){
        return (<p>HI there</p> )
    }
}

export default ExampleController;