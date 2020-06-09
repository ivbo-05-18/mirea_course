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
  }

  async handleType(event) {
    const { name, value } = event.target;
    const { num1, type1, type2 } = this.state;
    const num2 = await converterl(name === 'num1' ? value : num1, name === 'type1' ? value : type1, name === 'type2' ? value : type2);
    this.setState(
      () => ({
        [name]: value,
        num2,
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
          Конвертер валют онлайн
        </h3>
        <p>
          <select name="type1" value={type1} onChange={this.handleType}>
            <option selected="selected" value="">Исходная валюта</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="RUB">₽</option>
            <option value="JPY">￥</option>
          </select>
          <input type="number" name="num1" onChange={this.handleType} placeholder="Число" value={num1} />
          <select name="type2" onChange={this.handleType} value={type2}>
            <option selected="selected" value="">Конвертированая валюта</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="RUB">₽</option>
            <option value="JPY">￥</option>
          </select>
          <p>{num2}</p>
        </p>
      </div>
    );
  }
}


export default Converter;
