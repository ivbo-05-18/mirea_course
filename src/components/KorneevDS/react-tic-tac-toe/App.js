import React, { Component } from 'react';
import game_styles from './TicTacToe.module.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Game class={game_styles} />
        </p>
      </div>
    );
  }
}

export default App;
