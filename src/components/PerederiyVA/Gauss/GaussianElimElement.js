import React from 'react';
import GaussianElimResult from './GaussianElimResult';
import styles from './GaussianElimElement.module.css';

class GaussianElimElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [[2, 3, 1, 17], [4, 9, 7, 63], [-3, 7, -4, -1]],
    };
  }

    updateMatrix = (e, i, index) => {
      const updatedMatrix = new Array(3);
      const { matrix } = this.state;
      for (let j = 0; j < 3; j++) {
        updatedMatrix[j] = matrix[j].slice();
      }

      if (parseFloat(e.target.value) || parseFloat(e.target.value) === 0) {
        updatedMatrix[i][index] = parseFloat(e.target.value);
      } else {
        // Для удобства ввода оставить пользователю возможность вводить строки, которые не
        // пройдут parse в float (функция GaussianElim при таких входных данных вернёт исключение)
        updatedMatrix[i][index] = e.target.value;
      }

      this.setState({
        matrix: updatedMatrix,
      });
    }

    /* eslint-disable react/no-array-index-key */
    // В данном случае нечего использовать в качестве идентификатора, кроме индекса
    // Индекс в данном случае - номер строки
    // Кол-во строк так же постоянно, порядок элементов поменяться не может
    render() {
      const { matrix } = this.state;
      return (
        <div className={styles.gauss_input}>
          <table>
            <tbody>
              {matrix.map((item, i) => (
                <tr key={`row${i}`}>
                  <td key={`row${i}_x`}>
                    <input key={`row${i}_x_input`} type="number" step="any" value={item[0]} onChange={(e) => this.updateMatrix(e, i, 0)} />
                    x +
                  </td>
                  <td key={`row${i}_y`}>
                    <input key={`row${i}_y_input`} type="number" step="any" value={item[1]} onChange={(e) => this.updateMatrix(e, i, 1)} />
                    y +
                  </td>
                  <td key={`row${i}_z`}>
                    <input key={`row${i}_z_input`} type="number" step="any" value={item[2]} onChange={(e) => this.updateMatrix(e, i, 2)} />
                    z =
                  </td>
                  <td key={`row${i}_result`}>
                    <input key={`row${i}_result_input`} type="number" step="any" value={item[3]} onChange={(e) => this.updateMatrix(e, i, 3)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <GaussianElimResult input={matrix} />
        </div>
      );
    }
}

export default GaussianElimElement;
