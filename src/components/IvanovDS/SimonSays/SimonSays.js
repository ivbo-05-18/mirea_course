/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import classes from './SimonSays.module.css';

const sounds = [
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
];

class SimonSays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
      sequence: [],
      guesses: [],
      css: [],
      title: 'Rametta',
      sound: true,
      on: false,
    };
  }

  onStart() {
    this.onReset();
    this.playSequence();
  }

  onReset() {
    this.setState({
      score: 0,
      sequence: [],
      guesses: [],
      css: [],
      title: 'Rametta',
      on: true,
    });
  }

  onSound() {
    const { sound } = this.state;
    this.setState({ sound: !sound });
  }

  nextSequence() {
    return Math.floor(Math.random() * 4);
  }

  getClassArray(panel) {
    const css = [];
    for (let i = 0; i < panel; i++) { css.push(''); }
    css.push('active');
    return css;
  }

  playSequence() {
    let i = 0;
    const sequence = [...this.state.sequence, this.nextSequence()];
    this.setState({ sequence, guesses: [] });
    const id = setInterval(() => {
      this.blinkPanel(sequence[i++]);
      if (i === sequence.length) { clearInterval(id); }
    }, 1000);
  }

  blinkPanel(panel) {
    const css = this.getClassArray(panel);
    setTimeout(() => {
      this.setState({ css });
      this.sound(panel);
    }, 500); // On for 500ms
    setTimeout(() => this.setState({ css: [] }), 1000); // Off for 500ms
  }

  panelClick(guess) {
    const { on, sequence, score } = this.state;
    if (!on) { return; }
    this.sound(guess);
    let correct = true;
    const guesses = [...this.state.guesses, guess];

    // Did they lose?
    guesses.forEach((g, i) => {
      if (g !== sequence[i]) {
        this.setState({ title: 'Game Over' });
      }
    });

    this.setState({ guesses });

    // Did they get that sequence right?
    if (guesses.length === sequence.length) {
      sequence.forEach((s, i) => {
        if (s !== guesses[i]) { correct = false; }
      });
      if (correct) {
        this.setState({ score: score + 1 });
        this.playSequence();
      }
    }
  }

  sound(panel) {
    const { sound } = this.state;
    if (sound) { sounds[panel].play(); }
  }

  renderPanels() {
    const pans = ['green', 'red', 'blue', 'yellow'];
    return pans.map((panel, i) => {
      const key = `${panel}Panel`;
      if (this.state.css[i] === 'active') {
        return <use key={i} className={classes[`${key}_active`]} href="#panel" onClick={() => this.panelClick(i)} />;
      }
      return <use key={i} className={classes[key]} href="#panel" onClick={() => this.panelClick(i)} />;
    });
  }

  render() {
    const { score, title, sound } = this.state;
    return (
      <svg className={classes.simon} viewBox="0 0 1280 850">
        <defs>
          <path id="panel" d="M324.808323,9.24242491e-14 L323.128064,-5.68434189e-14 C150.82522,12.1741718 13.171985,149.852138 1,322.185938 L1,323.866499 L194.440467,323.866499 C204.652681,256.739477 257.693359,203.68927 324.808323,193.47522 L324.808323,1.42180138e-13 L324.808323,9.24242491e-14 Z" />
        </defs>
        <g transform="translate(85, 77)">
          <circle className={classes.bigCircle} />
          {this.renderPanels()}
        </g>
        <path className={classes.controlPanel} d="M729.42003,389.999999 C733.667892,400.844403 736,412.649855 736,425 C736,478.019336 693.019336,521 640,521 C586.980664,521 544,478.019336 544,425 C544,412.649855 546.332108,400.844403 550.57997,389.999999 L729.420038,390 Z" />
        <text className={classes.btn} x="353" y="416">{sound ? 'SOUND' : <tspan>&nbsp;OFF</tspan>}</text>
        <text className={classes.btn} x="410" y="416">RESET</text>
        <text className={classes.btn} x="466" y="416">START</text>
        <text className={classes.title} x="364" y="371">{title}</text>
        <circle className={classes.btnYellow} cx="374" cy="436" onClick={() => this.onSound()} />
        <circle className={classes.btnRed} cx="430" cy="436" onClick={() => this.onReset()} />
        <circle className={classes.btnBlue} cx="486" cy="436" onClick={() => this.onStart()} />
        <rect className={classes.scoreboard} x="379" y="463" />
        <text className={classes.placeholders} x="381" y="490">88888</text>
        <text className={classes.score} x="381" y="490">{score}</text>
      </svg>
    );
  }
}
export default SimonSays;
