import React, { Component } from 'react';
import Matrix from '../Matrix/Matrix';
import slauResult from './slauResult';

const KRAMER_STYLES = {
  fontSize: '20px',
  color: '#000',
};

class Kramer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: {
        matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        res: [0, 0, 0],
        type: 3,
      },
      result: [],
      errorMessage: '',
      determinant: 0,
      isResult: false,
    };
  }


  createNewMatrix = () => {
    const { matrix } = this.state;
    const newMatrix = {
      matr: [...matrix.matr.map((el) => [
        ...el.slice(),
      ])],
      res: matrix.res.slice(),
      type: matrix.type,
    };
    return newMatrix;
  }

  onChangeInputHandler = (event) => {
    const matrix = this.createNewMatrix();
    matrix.matr[event.target.name[0] - 1][event.target.name[1] - 1] = event.target.value;
    this.setState({
      matrix,
      isResult: false,
    });
  }

  onPlusHandler = () => {
    const matrix = this.createNewMatrix();
    if (matrix.type === 9) { return; }
    for (let i = 0; i < matrix.type; i++) {
      matrix.matr[i].push(0);
    }
    matrix.type += 1;
    const arr = [];
    for (let i = 0; i < matrix.type; i++) {
      arr.push(0);
    }
    matrix.matr.push(arr);
    matrix.res.push(0);
    this.setState({
      matrix,
      isResult: false,
    });
  }

  onMinusHandler = () => {
    const matrix = this.createNewMatrix();
    if (matrix.type === 1) { return; }
    for (let i = 0; i < matrix.type; i++) {
      matrix.matr[i].pop();
    }
    matrix.type -= 1;
    matrix.matr.pop();
    matrix.res.pop();
    this.setState({
      matrix,
      isResult: false,
    });
  }

  onChageResHandler = (event) => {
    const matrix = this.createNewMatrix();
    matrix.res[event.target.name] = event.target.value;
    this.setState({
      matrix,
      isResult: false,
    });
  }

  onResultHandler = () => {
    this.validate();
    const matrix = this.createNewMatrix();
    for (let i = 0; i < matrix.type; i++) {
      matrix.matr[i].push(Number.parseFloat(matrix.res[i]));
    }
    let result = Array(matrix.type);
    try {
      result = slauResult(matrix.matr);
    } catch (e) {
      this.setState({
        errorMessage: e.message,
        isResult: true,
        determinant: '-',
        result: [],
      });
      return;
    }
    if (result.roots) {
      this.setState({
        result: result.roots,
        isResult: true,
        errorMessage: '',
        determinant: result.det,
      });
    } else {
      this.setState({
        errorMessage: 'Данная система уравнений не имеет решений!',
        isResult: true,
        determinant: '-',
        result: [],
      });
    }
  }

  validate() {
    const matrix = this.createNewMatrix();
    for (let i = 0; i < matrix.type; i++) {
      for (let j = 0; j < matrix.type; j++) {
        matrix.matr[i][j] = Number.parseFloat(matrix.matr[i][j]);
      }
    }
    this.setState({
      matrix,
    });
  }

  renderResult() {
    const { result } = this.state;
    return result.map((res, index) => (
      <React.Fragment key={res}>
        <br />
        <span key={res}>
          {index !== result.length - 1 ? `a${index + 1} = ${res}, ` : `a${index + 1} = ${res}`}
        </span>
      </React.Fragment>
    ));
  }

  render() {
    const {
      matrix, isResult, determinant, errorMessage,
    } = this.state;
    return (
      <div style={KRAMER_STYLES}>
        <Matrix
          matrix={matrix}
          onChangeInput={(event) => this.onChangeInputHandler(event)}
          onChageResHandler={(event) => this.onChageResHandler(event)}
        />
        <button type="button" className="countMinus" onClick={this.onMinusHandler}>-</button>
        <button type="button" className="countPlus" onClick={this.onPlusHandler}>+</button>
        <button type="button" className="resultt" onClick={this.onResultHandler}>Решить</button>
        {
          matrix.type !== 1 && isResult
            ? (
              <p className="det">
                <span>
                  Det =
                  {determinant}
                </span>
              </p>
            )
            : null
        }
        {
          isResult
            ? (
              <p className="res">
                Ответ:
                {' '}
                {!errorMessage
                  ? this.renderResult()
                  : errorMessage}
                {' '}

              </p>
            )
            : null
        }
      </div>
    );
  }
}

export default Kramer;
