import React from 'react';
import QuizApp from './Quiz/src/quiz';
import SimonGame from './Game/game';
import Uploader from './Uploader/uploader';

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
      <SimonGame />
    </div>
    <h2 style={TEXT_STYLE}>Заимствованный элемент</h2>
    <div style={QUIZ_STYLE}>
      <QuizApp />
    </div>
    <h2 style={TEXT_STYLE}>Элемент от другого участника(Медный Н.Ю.)</h2>
    <div>
      <Uploader />
    </div>
    <div />
  </div>
);

export default KarpikAAElement;
