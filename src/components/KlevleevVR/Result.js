import React from 'react';
import PropTypes from 'prop-types';

const CORRECT = {
  fontSize: '16px',
  padding: '10px',
  margin: '10px',
  color: '#C9F76F',
};

const WRONG = {
  fontSize: '16px',
  padding: '10px',
  margin: '10px',
  color: '#FF7373',
};

const Result = ({ correct }) => (
  <div style={correct === 1 ? CORRECT : WRONG}>
    {correct === 1 ? 'Верно!' : 'Неверно!'}
  </div>
);

Result.propTypes = {
  correct: PropTypes.number.isRequired,
};

export default Result;
