import React from 'react';
import MemeCreator from './MemeCreator/MemeCreator';

export default function KomarBGElement() {
  const TEXT_STYLE = {
    fontSize: '25px',
    color: 'black',
    margin: '10px 0px',
  };

  const ELEMENT_STYLE = {
    'border-radius': '2px',
    background: '#DFDFDF',
    margin: '10px',
    padding: '5px 25px',
  };

  return (
    <div className="komar-bg_element" style={ELEMENT_STYLE}>
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <MemeCreator />
    </div>
  );
}
