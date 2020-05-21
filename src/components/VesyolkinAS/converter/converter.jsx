import React from 'react';
import converterl from './converter-logik';

const STYLE = {
  background: '#73716e',
};

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '0',
      type1: '',
      type2: '',
    };
    this.handleType = this.handleType.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleType(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
    this.setState(
      (state) => ({
        num2: converterl(state.num1, state.type1, state.type2),
      }),
    );
  }

  handleInput(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
    this.setState(
      (state) => ({
        num2: converterl(state.num1, state.type1, state.type2),
      }),
    );
  }

  render() {
    const {
      num1, num2, type1, type2,
    } = this.state;
    return (
      <div style={STYLE}>
        <h3>
          Конвертер валют
          курс на 21.05.2020
        </h3>
        <p>
          <select name="type1" value={type1} onChange={this.handleType}>
            <option selected="selected">Исходная валюта</option>
            <option value="1">$</option>
            <option value="1.1">€</option>
            <option value="0.014">₽</option>
            <option value="0.0093">￥</option>
          </select>
          <input type="number" name="num1" onInput={this.handleInput} placeholder="Число" value={num1} />
          <select name="type2" onChange={this.handleType} value={type2}>
            <option selected="selected">Конвертированая валюта</option>
            <option value="1">$</option>
            <option value="1.1">€</option>
            <option value="0.014">₽</option>
            <option value="0.0093">￥</option>
          </select>
          <p>{num2}</p>
        </p>
      </div>
    );
  }
}


export default Converter;
