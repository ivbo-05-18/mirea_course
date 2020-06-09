import React, { Component } from 'react';
import Cats from './Cats';
import getRandomIntInclusive from './getRandom';

export const checkErrors = (value) => {
  if (value == null || value === '') {
    return ('Вы не ввели число!');
  }
  if (!value.match(/^[0-9]+$/)) {
    return ('Ошибка ввода!');
  }
  if (value > 9) {
    return ('Число больше девяти!');
  }
  return (<Cats num={value} />);
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

  handleSubmit(event) {
    const { num } = this.state;
    this.setState({ cats: checkErrors(num) });
    // preventDefault() здесь необходим, чтобы предотвратить обновление страницы
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
