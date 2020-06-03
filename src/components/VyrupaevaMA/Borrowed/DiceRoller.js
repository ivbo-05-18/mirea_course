import React, { Component } from 'react';
import styles from './Dice.module.css';

import Die from './Die';

class DiceRoller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [],
      mod: 0,
    };
  }

  addDie(faces) {
    const { dice } = this.state;
    dice.push(new Die(faces));
    this.setState({ dice });
  }

  removeDie(key) {
    const { dice } = this.state;
    dice.splice(key, 1);
    this.setState({ dice });
  }

  rollDie(key) {
    const { dice } = this.state;
    dice[key].value = dice[key].roll();
    this.setState({ dice });
  }

  calcSum() {
    const { dice } = this.state;
    return dice.reduce((acc, die) => acc + die.value, 0);
  }

  renderDie(key) {
    const { dice } = this.state;
    return (
      <div key={key} className={styles.dieRemAdd}>
        <button type="button" onClick={() => this.rollDie(key)}>
          Roll!
          {dice[key].value}
        </button>
        <div id="die-label">
          {dice[key].faces}
        </div>
        <button type="button" onClick={() => this.removeDie(key)}>
          Drop
        </button>
      </div>
    );
  }

  renderDesc() {
    const { dice } = this.state;
    const { mod } = this.state;
    const counts = {};
    dice.forEach((die) => {
      counts[die.faces] = counts[die.faces] === undefined
        ? 1
        : counts[die.faces] + 1;
    });
    let pool;

    if (Object.keys(counts).map(
      (type) => `${counts[type]}d${type}`,
    ).join(' + ')) {
      if (mod > 0) {
        pool = ` + ${mod}`;
      } else { pool = ` - ${-mod}`; }
    } else { pool = ''; }
    return pool;
  }

  render() {
    const { dice } = this.state;
    const { mod } = this.state;
    return (
      <div className={styles.vyrupaeva}>
        <div id="adders">
          {[4, 6, 8, 10, 100, 12, 20].map((faces) => (
            <button type="button" className="col" key={faces.key} onClick={() => { this.addDie(faces); }}>
              +d
              {faces}
            </button>
          ))}
        </div>
        <div id="controllers">
          <div id="total-display" className="row">
            <div className="col-8" style={{ padding: 0 }}>
              <button type="button" style={{ float: 'left' }} onClick={() => { this.setState({ mod: mod - 1 }); }}>
                -
              </button>
              {this.renderDesc()}
              <button type="button" style={{ float: 'right' }} onClick={() => { this.setState({ mod: mod + 1 }); }}>
                +
              </button>
            </div>
            <div className="col-4">
              Total:
              {' '}
              {this.calcSum()}
            </div>
          </div>
          <div className={styles.vyrupaeva}>
            <button
              type="button"
              onClick={() => {
                dice.forEach((_, key) => {
                  this.rollDie(key);
                });
              }}
            >
              Roll Dice
            </button>
            <button
              type="button"
              onClick={() => {
                while (dice.length) {
                  this.removeDie(0);
                }
                this.setState({ mod: 0 });
              }}
            >
              Clear Pool
            </button>
            <button
              type="button"
              onClick={() => {
                dice.forEach((d) => { const diceval = d; diceval.value = 0; });
                this.setState({ dice });
              }}
            >
              Reset Dice
            </button>
          </div>
        </div>
        <div id="dicepool" className="row">
          {dice.map((_, key) => this.renderDie(key))}
        </div>
      </div>
    );
  }
}

export default DiceRoller;
