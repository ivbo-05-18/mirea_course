import React from 'react';
import MemeCreator from './MemeCreator/MemeCreator';
import ChromeDinoComponent from './DinoGame';
import Captcha from './Captcha/Captcha';

export default function KomarBGElement() {
  const TEXT_STYLE = {
    fontSize: '25px',
    color: 'black',
    margin: '10px 0px',
    fontWeight: 'bold',
  };
  const SUBTEXT_STYLE = {
    fontSize: '15px',
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
    <div className="komar-bg-element" style={ELEMENT_STYLE}>
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <p style={SUBTEXT_STYLE}>Редактор мем картинок</p>
      <MemeCreator />
      <hr />
      <p style={TEXT_STYLE}>Заимствованный компонент</p>
      <p style={SUBTEXT_STYLE}>GitHub, Динозаврик Chrome</p>
      <ChromeDinoComponent />
      <hr />
      <p style={TEXT_STYLE}>Заимствованный компонент</p>
      <p style={SUBTEXT_STYLE}>Передерий В.А., Captcha</p>
      <Captcha />
    </div>
  );
}
