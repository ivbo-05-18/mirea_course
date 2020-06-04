import React from 'react';

import LightboxElimElement from './lightbox';
import ChartElimElement from './Chart';
import Music_player from './Music_player';

const STYLE = {
  'border-radius': '2px',
  background: '#DFDFDF',
  margin: '10px',
  padding: '5px 25px',
};

const TEXT_STYLE = {
  'font-size': '16px',
  color: 'black',
  margin: '10px 0px',
};

// eslint-disable-next-line react/prefer-stateless-function
class LadoshkinaDIElement extends React.Component {
  render() {
    return (
      <div style={STYLE}>
        <h2 style={TEXT_STYLE}>Собственный элемент </h2>
        <div>
          <ChartElimElement />
        </div>


        <h2 style={TEXT_STYLE}>Заимствованный элемент </h2>
        <div>
          <LightboxElimElement />
        </div>


        <h2 style={TEXT_STYLE}>Элемент от другого участника (Карпик А. А.)</h2>
        <div>
          <Music_player />
        </div>
      </div>
    );
  }
}

export default LadoshkinaDIElement;
