import React from 'react';
import GaussianElimElement from './Gauss';

const STYLE = {
    borderRadius : '2px',
    background      : '#DFDFDF',
    margin          : '10px',
    padding         : '5px 25px'
}

const TEXT_STYLE = {
    fontSize : '16px',
    color       : 'black',
    margin      : '10px 0px'
}

class PerederiyVAElement extends React.Component {
    render(){
        return (
            <div style={STYLE}>
                <h2 style={TEXT_STYLE}>Решение СЛАУ 3-го порядка методом Гаусса</h2>
                <div>
                    <GaussianElimElement />
                </div>
            </div>
        )
    }
}

export default PerederiyVAElement;