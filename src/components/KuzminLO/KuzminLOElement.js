import React from 'react';
import CoronaTime from './coronatime';
import GaussianElimElement from '../PerederiyVA/Gauss/GaussianElimElement';
import App from './konvertilo-master/src/app/app';

const STYLEBACKALL = {
  borderRadius: '5px',
  background: '#595a66',
  margin: '10px',
  padding: '5px 25px',
};
const STYLELAYBEL = {
  display: 'inline-block',
  padding: '.25em .4em',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '.25rem',
  color: '#FFF',
  backgroundColor: '#45464f',
};
const STYLEA = {
  color: '#fff',
};

const KuzminLOElement = () => (
  <div style={STYLEBACKALL}>
    <div id="my">
      <span style={STYLELAYBEL}>Собственный элемент:</span>
      <CoronaTime />
    </div>
    <div id="notmy">
      <span style={STYLELAYBEL}>Элемент Передерия В.А.:</span>
      <GaussianElimElement />
    </div>
    <div id="notmy2">
      <span style={STYLELAYBEL}>
        <a href="https://github.com/tecnobert/konvertilo" style={STYLEA}>Конвертер (чужое)</a>
      </span>
      <App />
    </div>
  </div>
);

export default KuzminLOElement;
