import React from 'react';
import DiceRoller from './Borrowed/DiceRoller';
import Sentences from './Sentences/Sentences';
import PokeElement from './Mate/pokemon_main';

const DEFAULT_STYLE = {
  borderRadius: '2px',
  fontSize: '14px',
  fontFamily: 'courier',
  color: 'black',
  background: '#DFDFDF',
  margin: '10px',
  padding: '5px 25px',
};

const VyrupaevaMAElement = () => (
  <div style={DEFAULT_STYLE}>
    <h2>Свой элемент: поиск наиболее длинного и наиболее короткого предложений в тексте</h2>
    <div>
      <Sentences />
    </div>
    <h2>Заимствованный элемент: генератор броска кубиков для НРИ</h2>
    <div>
      <DiceRoller />
    </div>
    <h2>Элемент от одногруппника: покемоны</h2>
    <div className="mate">
      <PokeElement />
    </div>
  </div>
);

// original link: https://github.com/rileyjohngibbs/react-roller

export default VyrupaevaMAElement;
