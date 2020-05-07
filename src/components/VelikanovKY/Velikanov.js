import React, {Component} from 'react';
import FlagSelector from './FlagSelector';

const STYLE = {
    background      : '#303040',
    padding         : '0 25px',
    color           : '#CCCCCC'
}
class VelikanovKYController extends React.Component {
    constructor ( props ) {
        super ( props )
        this.state = { show: true }
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState ( { show: !show } )
    }
    
    render() {
        return (<div><div style = {STYLE}>
            <h2> Селектор стран</h2>
            <FlagSelector />
            
        </div>
        <hr />
         </div>)
    }
}

class VelikanovKYElement extends React.Component {
    render(){
        return (<p>HI there</p> )
    }
}

export default VelikanovKYController;