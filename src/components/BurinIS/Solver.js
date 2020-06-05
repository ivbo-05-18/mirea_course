import React from 'react';
import calculate from './calculate';

const STYLE = {
  display: 'inline-block',
};

class Solver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aCoef: '',
      bCoef: '',
      cCoef: '',
    };
    this.find = this.find.bind(this);
    this.setCoefficient = this.setCoefficient.bind(this);
     }

  find() {
    this.setState(
      (state) => ({
        solve: calculate(state.a, state.b, state.c),
      }),
    );
  }

  setCoefficient(event, coefficient) {
    this.setState({ [coefficient]: event.target.value });
    this.find();
  }

  render() {
    const { solve } = this.state;
    const { a } = this.state;
    const { b } = this.state;
    const { c } = this.state;
    return (
      <div className="input" style={STYLE}>
        <input type="number" id="a" onChange={e => this.setCoefficient(e, 'a')} value={a} />
        <h4 style={STYLE}> *x^2+ </h4>
        <input type="number" id="b" onChange={e => this.setCoefficient(e, 'b')} value={b} />
        <h4 style={STYLE}> *x+ </h4>
        <input type="number" id="c" onChange={e => this.setCoefficient(e, 'c')} value={c} />
        <h4 style={STYLE}> =0 </h4>
        <div id="solve" className="solve">
          <h4>Корни: </h4>
          {solve}
        </div>
      </div>
    );
  }
}
export default Solver;
