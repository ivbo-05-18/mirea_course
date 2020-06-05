import React from 'react';
import calculate from './calculate';

const STYLE = {
  display: 'inline-block',
};

class Solver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      b: '',
      c: '',
    };

    this.setCoefficient = this.setCoefficient.bind(this);
  }

  setCoefficient(event, coefficient) {
    this.setState({ [coefficient]: event.target.value });
  }

  render() {
    const { a } = this.state;
    const { b } = this.state;
    const { c } = this.state;
    let answer = '';
    let solve = {};
    solve = calculate(a, b, c);
    if (solve.flag === 0) { answer = 'Нет действительных корней'; }
    if (solve.flag === 1) { answer = `x1=${solve.x1};x2=${solve.x2}`; }
    if (solve.flag === 2) { answer = `x1= ${solve.x1}`; }
    if (solve.flag === 3) { answer = 'Введите коэффициент'; }
    return (
      <div className="input" style={STYLE}>
        <input type="number" id="a" onChange={(e) => this.setCoefficient(e, 'a')} value={a} />
        <h4 style={STYLE}> *x^2+ </h4>
        <input type="number" id="b" onChange={(e) => this.setCoefficient(e, 'b')} value={b} />
        <h4 style={STYLE}> *x+ </h4>
        <input type="number" id="c" onChange={(e) => this.setCoefficient(e, 'c')} value={c} />
        <h4 style={STYLE}> =0 </h4>
        <div id="solve" className="solve">
          <h4>{answer}</h4>
        </div>
      </div>
    );
  }
}
export default Solver;
