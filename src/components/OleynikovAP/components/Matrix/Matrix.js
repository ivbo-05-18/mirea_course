import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const MATRIX_STYLE = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const renderMatrix = (matrix, onChageInput) => (
  <table>
    <tbody>
      {matrix.matr.map((row, i) => (
        <tr key={Math.random()}>
          {row.map((cell, j) => {
            const k = `${i + 1}${j + 1}`;
            return (
              <td key={Math.random()}>
                <Input
                  key={Math.random()}
                  value={cell}
                  onChangeInput={onChageInput}
                  name={k}
                  span={j !== matrix.matr.length - 1 ? `a${k}` : `a${k} = `}
                />
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

const Matrix = (props) => {
  const {
    matrix,
    onChangeInput,
    onChageResHandler,
  } = props;

  return (
    <div style={MATRIX_STYLE}>
      {renderMatrix(matrix, onChangeInput)}
      <table>
        <tbody>
          {matrix.res.map((res, index) => (
            <tr key={Math.random()}>
              <td key={Math.random()}>
                <Input
                  key={Math.random()}
                  value={res}
                  onChangeInput={onChageResHandler}
                  name={index}
                  span=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Matrix.propTypes = {
  matrix: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
  ])).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onChageResHandler: PropTypes.func.isRequired,
};

export default Matrix;
