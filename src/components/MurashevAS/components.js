import React from 'react';
import MoneyElement from './mon_change/money';
import GameElement from './ping-pong/ping-pong';
import GaussianElimElement from './Gauss';

const STYLE = {
  font_size: '10px',
  margin: '10px',
  background: 'gray',
};

const STYLE_TITLE = {
  font_size: '10px',
  margin_top: '20px',
  background: '#c9dbe9',
};

const STYLE_MAIN = {
  color: 'black',
  margin_top: '20px',
  background: '#DFDFDF',
  padding: '5px 25px',
};

const MurashevElement = () => (
  <div style={STYLE_MAIN}>
    <div style={STYLE_TITLE}>Собственный элемент - Конвертер из рублей в доллары</div>
    <div style={STYLE}>
      <MoneyElement />
    </div>
    <div style={STYLE_TITLE}>Заимствованный элемент - Ping-Pong</div>
    <div style={STYLE}>
      <span>
        Управление 1го игрока кнопками вверх, вниз.
        <br />
        Управление 2го игрока кнопками W, S.
        <br />
        Выбор режима игры - кнопка под игрой.
        <br />
      </span>
      <GameElement />
    </div>
    <div style={STYLE_TITLE}>Заимствованный элемент - решение СЛАУ методом Гаусса</div>
    <div style={STYLE}>
      <GaussianElimElement />
    </div>
  </div>
);

export default MurashevElement;
