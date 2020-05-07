import React from 'react';

const GaussianElim = require('./GaussianElim');

const GaussianElimResult = (props) => {
  try {
    if (props.input === undefined) throw new Error("matrix wasn't passed");
    else {
      var matrixToPass = new Array(3); // Создаём копию двумерного массива, чтобы не менять исходный
      for (let i=0; i<3; i++) {
        matrixToPass[i] = props.input[i].slice();
      }
      const resultVector = GaussianElim(matrixToPass);
      if (resultVector === undefined) throw new Error("решений нет");
      return (
        <p className="result">x = {resultVector[0].toFixed(2)}, y = {resultVector[1].toFixed(2)}, z = {resultVector[2].toFixed(2)}</p>
      );
    }
  } catch (e) {
    return (
      <p className="result">Ошибка: {e.message}!</p>
    );
  }
};

export default GaussianElimResult;