import React from 'react';

import GaussianElimElement from './Gauss';
import LightboxElimElement from './lightbox';


const STYLE = {
    'border-radius' : '2px',
    background      : '#DFDFDF',
    margin          : '10px',
    padding         : '5px 25px'
}

const TEXT_STYLE = {
    'font-size' : '16px',
    color       : 'black',
    margin      : '10px 0px'
}

const SNAKE_STYLE = {
    margin : '10px auto',
    height : 500,
    width  : 600
};

class LadoshkinaDIElement extends React.Component {
    render(){
        return (
            <div style={STYLE}>
                <h2 style={TEXT_STYLE}>Собственный элемент </h2>
                <div>
   
                </div>
            
            
                <h2 style={TEXT_STYLE}>Заимствованный элемент </h2>
            <div>
          <LightboxElimElement />
                </div>
            
                
                <h2 style={TEXT_STYLE}>Элемент от другого участника </h2>
                 <div>
                    <GaussianElimElement />
                </div>
            </div>
        )
    }
}

export default LadoshkinaDIElement;