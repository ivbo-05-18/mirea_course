import React from 'react';
import GaussianElim from './GaussianElim';

const GaussianElimResult = (props) => {
  try {
    if (props.input === undefined) {
      throw new Error("matrix wasn't passed");
    } else {
      const resultVector = GaussianElim(props.input);
      if (resultVector === undefined) {
        throw new Error('решений нет');
      }
      return (
        <p>
          x =
          {resultVector[0].toFixed(2)}
          , y =
          {resultVector[1].toFixed(2)}
          , z =
          {resultVector[2].toFixed(2)}
        </p>
      );
    }
  } catch (e) {
    return (
      <p>
        Ошибка:
        {e.message}
        !
      </p>
    );
  }
};

export default GaussianElimResult;
