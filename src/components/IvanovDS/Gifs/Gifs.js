/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Cats from './Cats';
import styles from './Gifs.module.css';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const checkErrors = (props) => {
  if (props == null || props === '') {
    // this.setState({ cats: this.makeAnError('Вы не ввели число!')});
    return ('Вы не ввели число!');
  }
  if (!props.match(/^[0-9]+$/)) {
    // this.setState({ cats: this.makeAnError('Ошибка ввода!')});
    return ('Ошибка ввода!');
  }
  if (props > 9) {
    // this.setState({ cats: this.makeAnError('Число больше девяти!')});
    return ('Число больше девяти!');
  }
  return (<Cats num={props} />);
};

class Gifs extends Component {
  constructor(props) {
    super(props);
    this.state = { num: null };
    this.state = { cats: <Cats num={getRandomIntInclusive(0, 9)} /> };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ num: event.target.value });
  }

  makeAnError(props) {
    return (
      <div className={styles.box}>
        <div>
          <p>{props}</p>
        </div>
        <div>
          <p>Ошибка!</p>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    const { num } = this.state;
    this.setState({ cats: checkErrors(num) });
    event.preventDefault();
  }

  render() {
    const { cats } = this.state;
    const { num } = this.state;
    return (
      <div>
        {cats}
        <form onSubmit={this.handleSubmit}>
          <p>Введите число от [0;9], чтобы сменить GIF</p>
          <br />
          <input id="inputArea" type="text" value={num} onChange={this.handleChange} />
          <br />
          <input id="submitData" type="submit" value="Ввод" />
        </form>
      </div>
    );
  }
}

export default Gifs;
