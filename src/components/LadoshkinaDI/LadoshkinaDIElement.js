import React from 'react';

import LightboxElimElement from './lightbox';
import ChartElimElement from './Chart';
import GhibliElimElement from './Ghibli';

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


        <h2 style={TEXT_STYLE}>Элемент от другого участника </h2>
        <div>
          <GhibliElimElement />
        </div>
      </div>
    );
  }
}

export default LadoshkinaDIElement;
