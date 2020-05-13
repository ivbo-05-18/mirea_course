import React from 'react';
import Money_Element from './mon_change/money';
import Game_Element from './ping-pong/ping-pong.js';
import GaussianElimElement from './Gauss';

const STYLE = {
    font_size:'10px',
    margin: '10px',
    background: 'gray',
}

const STYLE_TITLE = {
    font_size:'10px',
    margin_top: '20px',
    background: '#c9dbe9',
}

const STYLE_MAIN = {
    color: 'black',
    margin_top: '20px',
    background: '#DFDFDF',
    padding: '5px 25px'
}

class MurashevElement extends React.Component {
    render(){
        return (
            <div style={STYLE_MAIN}>
                <div style={STYLE_TITLE}>Собственный элемент - Конвертер из рублей в доллары</div>
                <div style={STYLE}>
                <Money_Element/>
                </div>
                <div style={STYLE_TITLE}>Заимствованный элемент - Ping-Pong</div>
                <div style={STYLE}>
                    <span>Управление 1го игрока кнопками вверх, вниз.<br/>
                    Управление 2го игрока кнопками W, S.<br/>
                    Выбор режима игры - кнопка под игрой.<br/>
                    </span>
                <Game_Element/>
                </div>
                <div style={STYLE_TITLE}>Заимствованный элемент - решение СЛАУ методом Гаусса (Передерий В.А.)</div>
                <div style={STYLE}>
                <GaussianElimElement/>
                </div>
            </div>
        )
    }
}

export default MurashevElement;