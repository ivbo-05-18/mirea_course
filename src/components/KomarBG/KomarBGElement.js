import React from 'react';
import MemeCreator from './MemeCreator/MemeCreator';
import Minesweeper from './MineSweeper/Minesweeper';
import KorneevDSElement from './KorneevDS/KorneevDSElement';

export default function KomarBGElement() {
  const TEXT_STYLE = {
    fontSize: '25px',
    color: 'black',
    margin: '10px 0px',
    fontWeight: 'bold',
  };

  const ELEMENT_STYLE = {
    borderRadius: '2px',
    background: '#DFDFDF',
    margin: '10px',
    padding: '5px 25px',
  };

  return (
    <div className="komar-bg_element" style={ELEMENT_STYLE}>
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <MemeCreator />
      <hr />
      <p style={TEXT_STYLE}>Заимственный компонент с GitHub</p>
      <Minesweeper />
      <hr />
      <p style={TEXT_STYLE}>Заимственный компонент (Корнеев Д.С.) </p>
      <KorneevDSElement />
    </div>
  );
}
