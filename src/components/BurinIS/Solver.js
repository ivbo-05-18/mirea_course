import React from 'react';
import calculate from './calculate';
import './Solver.css';

class Solver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aCoef: '',
      bCoef: '',
      cCoef: '',
    };
    this.find = this.find.bind(this);
    this.aCoefC = this.aCoefC.bind(this);
    this.bCoefC = this.bCoefC.bind(this);
    this.cCoefC = this.cCoefC.bind(this);
  }

  find() {
    this.setState(
      (state) => ({
        solve: calculate(state.aCoef, state.bCoef, state.cCoef),
      }),
    );
  }

  aCoefC(event) {
    this.setState({ aCoef: event.target.value });
    this.find();
  }

  bCoefC(event) {
    this.setState({ bCoef: event.target.value });
    this.find();
  }

  cCoefC(event) {
    this.setState({ cCoef: event.target.value });
    this.find();
  }

  render() {
    const { solve } = this.state;
    const { aCoef } = this.state;
    const { bCoef } = this.state;
    const { cCoef } = this.state;
    return (
      <div className="input">
        <input type="number" id="aCoef" onInput={this.aCoefC} value={aCoef} />
        <h4> *x^2+ </h4>
        <input type="number" id="bCoef" onChange={this.bCoefC} value={bCoef} />
        <h4> *x+ </h4>
        <input type="number" id="cCoef" onChange={this.cCoefC} value={cCoef} />
        <h4> =0 </h4>
        <div id="solve" className="solve">
          <h4>Корни: </h4>
          {solve}
        </div>
      </div>
    );
  }
}
export default Solver;
