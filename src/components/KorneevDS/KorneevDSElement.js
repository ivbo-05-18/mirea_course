import React from 'react';
import Watch from './watch/watch';
import Leaderboard from '../PetrovSD/Leaderboard';
import TicTacToe from './react-tic-tac-toe';

const STYLE = {
  'border-radius': '2px',
  background: '#999',
  margin: '10px',
  padding: '5px 25px',
};

const BLOCK_STYLE = {
  'max-width': 900,
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'center',
  'font-size': '16px',
};

const TEXT_STYLE = {
  'font-size': '16px',
  color: 'black',
  margin: '10px 0px',
};

const KorneevDSElement = () => (
  <div style={STYLE}>
    <h2 style={TEXT_STYLE}>Собственный элемент - часы</h2>
    <div style={BLOCK_STYLE}>
      <Watch />
    </div>
    <h2 style={TEXT_STYLE}>Заимствованный элемент - игра &quot;Крестики-нолики&quot;</h2>
    <div style={BLOCK_STYLE}>
      <TicTacToe />
    </div>
    <h2 style={TEXT_STYLE}>Элемент одногруппника  (Петров С.Д.)</h2>
    <div style={BLOCK_STYLE}>
      <Leaderboard />
    </div>
  </div>
);

export default KorneevDSElement;
