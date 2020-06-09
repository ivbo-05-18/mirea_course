import React, { Component } from 'react';
import './Sentences.css';
import getResult from './getResult';

class Sentences extends Component {
  constructor(props) {
    super(props);
    this.state = { txtvalue: '', shortest: 'пока не определено', longest: 'пока не определено' };
    this.change = this.change.bind(this);
    this.clear = this.clear.bind(this);
  }

  change(event) {
    this.setState({ txtvalue: event.target.value });
    const { txtvalue } = this.state;
    const results = getResult(txtvalue);
    this.setState({ longest: results[1], shortest: results[0] });
  }

  clear() {
    document.getElementById('mainText').value = '';
    document.getElementById('mainText').focus();
    this.setState({ shortest: 'пока не определено', longest: 'пока не определено' });
  }

  render() {
    const { longest } = this.state;
    const { shortest } = this.state;
    return (
      <div type="vyrupaeva_div">
        <textarea onChange={this.change} id="mainText" name="mainText" cols="40" rows="6" placeholder="Введите свой текст..." />
        <div className="vyrupaeva">
          <button type="button" id="clear" onClick={this.clear}>Очистить</button>
        </div>
        <p className="vyrupaeva_paragraph" id="shortest">
          Самое короткое предложение:
          {shortest}
        </p>
        <p className="vyrupaeva_paragraph" id="longest">
          Самое длинное предложение:
          {longest}
        </p>
      </div>
    );
  }
}

export default Sentences;
