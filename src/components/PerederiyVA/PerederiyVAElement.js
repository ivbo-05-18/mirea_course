import React from 'react';
import Snake from './Snake';
import GaussianElimElement from './Gauss';
import Captcha from './Captcha/Captcha'



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
                <h2 style={TEXT_STYLE}>Собственный элемент - решение СЛАУ 3-го порядка методом Гаусса</h2>
                <div>
                    <GaussianElimElement />
                </div>
                <h2 style={TEXT_STYLE}>Заимствованный элемент - игра "Змейка"</h2>
                <p style={TEXT_STYLE}>Управление: W S A D.</p>
                <div style={SNAKE_STYLE}>
                    <Snake sound={false} />
                </div> 
                <h2 style={TEXT_STYLE}>Элемент от другого участника (Петров С.Д.)</h2>
                <div className="playerplayer">
                    <Captcha/>
                </div>
            </div>
        )
    }
}

export default PerederiyVAElement;