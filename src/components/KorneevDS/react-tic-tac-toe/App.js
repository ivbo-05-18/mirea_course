import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TicTacToe.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Game />
        </p>
      </div>
    );
  }
}

export default App;
