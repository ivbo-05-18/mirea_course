import React from 'react';
import TicTacToe from './TicTacToe/TicTacToe';
import SymonSays from './SimonSays/SimonSays';
import Gifs from './Gifs/Gifs';

const IvanovDSElement = () => (
  <div style={{ width: '800px' }}>
    <h5>Собственный элемент - игра Крестики-нолики</h5>
    <TicTacToe />
    <hr />
    <h5>Заимствованный элемент - игра Simon Says</h5>
    <SymonSays />
    <hr />
    <h5>Заимствованный элемент - gif изображение с котом (Капырин К.А.) </h5>
    <Gifs />
    <hr />
  </div>
);

export default IvanovDSElement;
