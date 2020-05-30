import React from 'react';
import App from './Quiz/src/index';
import Game from './Game/game';

const STYLE = {
  borderКadius: '2px',
  background: '#DFDFDF',
  margin: '10px',
  padding: '5px 25px',
};

const TEXT_STYLE = {
  fontSize: '16px',
  color: 'black',
  margin: '10px 0px',
};

const QUIZ_STYLE = {
  margin: '10px auto',
  height: 1180,
  width: 600,
};

const GAME_STYLE = {
  margin: '10px auto',
  height: 650,
  width: 600,
};

const KarpikAAElement = () => (
  <div style={STYLE}>
    <h2 style={TEXT_STYLE}>Собственный элемент</h2>
    <div style={GAME_STYLE}>
      <Game/>
    </div>
    <h2 style={TEXT_STYLE}>Заимствованный элемент</h2>
    <div style={QUIZ_STYLE}>
      <App/>
    </div>
    <h2 style={TEXT_STYLE}>Элемент от другого участника</h2>
    <div>
    </div>
  </div>
);

export default KarpikAAElement;