import React from 'react';
import Snake from './Snake';

const SNAKE_STYLE = {
    margin : '30px auto',
    height : 500,
    width  : 600
};

class PerederiyVAElement extends React.Component {
    render(){
        return (
            <div>
                <h3>Заимствованный элемент - игра "Змейка"</h3>
                Управление: W S A D.
                <div style={SNAKE_STYLE}>
                    <Snake sound={false} />
                </div>
            </div>
        )
    }
}

export default PerederiyVAElement;