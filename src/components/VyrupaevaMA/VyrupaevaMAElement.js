import React from 'react';
import DiceRoller from './Borrowed/';
import Sentences from './Sentences/Sentences';
import PokeElement from './Mate/pokemon_main';

const DEFAULT_STYLE = {
  'border-radius': '2px',
  'font-size': '14px',
  'font-family': 'courier',
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
    <h2>Элемент от одногруппника</h2>
    <div className="mate">
      <PokeElement />
    </div>
  </div>
);

// add router for external links?
// original link: https://github.com/rileyjohngibbs/react-roller

export default VyrupaevaMAElement;
