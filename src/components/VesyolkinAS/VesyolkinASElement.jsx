import React from 'react';
import GaussianElimElement from '../PerederiyVA/Gauss';
import Converter from './converter/converter';
import App from './React-Sweeper-master/src/App';

const STYLE = {
  'border-radius': '2px',
  background: '#DFDFDF',
  margin: '10px',
  padding: '5px 25px',
};

const VesyolkinASElement = () => (
  <div>
    <h2> Собственный элемент конвертер </h2>
    <div>
      <Converter />
    </div>
    <h2> Заимствованный элемент Передерий В. А. </h2>
    <h3> Решение СЛАУ методом Гаусса </h3>
    <div style={STYLE}>
      <GaussianElimElement />
    </div>
    <h2> Элемент с GitHUB</h2>
    <div>
      <App />
    </div>
  </div>
);

export default VesyolkinASElement;
