import React from 'react';
import CharInfo from './CharInfo';
import Gifs from './GifKap/SecondGifs';
import FifteenGame from './15-puzzle/fifteengame';

const ZolototrubovERElement = () => {
  const TEXT_STYLE = {
    'font-size': '25px',
    color: 'white',
    margin: '10px 0px',
  };
  const BACKGROUND = {
    'background-color': '#E8E8E8',
  };

  return (
    <div className="zolototrubov_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <center>
        <CharInfo />
      </center>
      <p style={TEXT_STYLE}>Заимствованный элемент - Gif изображение с котом (Капырин К.А.)</p>
      <Gifs />
      <br />
      <p style={TEXT_STYLE}>Заимствованный элемент - Игра пятнашки</p>
      <div style={BACKGROUND}>
        <FifteenGame />
      </div>
    </div>
  );
};

export default ZolototrubovERElement;
