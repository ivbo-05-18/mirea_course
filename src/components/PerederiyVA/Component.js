import React from 'react';
import Snake from './Snake';

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

class PerederiyVAElement extends React.Component {
    render(){
        return (
            <div style={STYLE}>
                <h2 style={TEXT_STYLE}>Заимствованный элемент - игра "Змейка"</h2>
                <p style={TEXT_STYLE}>Управление: W S A D.</p>
                <div style={SNAKE_STYLE}>
                    <Snake sound={false} />
                </div>    
            </div>
        )
    }
}

export default PerederiyVAElement;