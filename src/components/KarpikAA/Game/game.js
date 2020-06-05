/* eslint react/no-string-refs: "off" */
import React from 'react';
import styles from './game_style.module.css';

class SimonGame extends React.Component {
  sounds = {
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  };

  buttons = ['green', 'red', 'yellow', 'blue'];

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      round: 0,
      steps: [],
      text: '',
    };
  }

  playSound = (color) => {
    const { steps, round, index } = this.state;
    this.sounds[color].play();
    if (color === steps[index]) {
      this.setState((prevState) => ({ index: prevState.index + 1 }), () => {
        if ((index + 1) === round) {
          this.setState({
            index: 0,
          });
          this.generateStep();
          this.showSteps();
        }
      });
    } else if (round !== 0) {
      this.setState({
        text: `Game over! You reached round ${round}`,
      });
      this.resetSimon();
    }
  };

  // Generate a random color
  generateStep = () => {
    const { steps, round } = this.state;
    steps.push(this.buttons[(Math.floor(Math.random() * 4))]);
    this.setState({
      round: round + 1,
    });
  }

  // Play current step
  playStep = (step) => {
    const buttons = this.refs[step];
    buttons.classList.add(styles.hover);
    this.sounds[step].play();
    setTimeout(
      () => {
        buttons.classList.remove(styles.hover);
      },
      200,
    );
  };

  // Show all steps
  showSteps = () => {
    const { steps } = this.state;
    let num = 0;
    const moves = setInterval(
      () => {
        setTimeout((this.playStep(steps[num])), 300);
        this.setState({ text: 'Wait...' });
        num += 1;
        if (num >= steps.length) {
          this.setState({ text: 'Repeat the steps!' });
          clearInterval(moves);
        }
      },
      600,
    );
  };

  // Reset game
  resetSimon = (start) => {
    this.setState(
      {
        round: 0,
        index: 0,
        steps: [],
      },
      () => {
        if (start) {
          this.generateStep();
          this.showSteps();
        }
      },
    );
  };

  render() {
    const { text, round } = this.state;
    return (
      <div>
        <h1>Simon Says</h1>
        <div className={styles.simon}>
          <div className={styles.circle}>
            <div className={styles.inner}>
              <button
                type="button"
                aria-label="green"
                ref="green"
                className={styles.green}
                id="green"
                onClick={() => this.playSound(this.buttons[0])}
              />
              <button
                type="button"
                aria-label="red"
                ref="red"
                className={styles.red}
                id="red"
                onClick={() => this.playSound(this.buttons[1])}
              />
              <button
                type="button"
                aria-label="yellow"
                ref="yellow"
                className={styles.yellow}
                id="yellow"
                onClick={() => this.playSound(this.buttons[2])}
              />
              <button
                type="button"
                aria-label="blue"
                ref="blue"
                className={styles.blue}
                id="blue"
                onClick={() => this.playSound(this.buttons[3])}
              />
              <div className={styles.round}>{round}</div>
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.text}>{text}</div>
          <button type="button" id={styles.start} onClick={() => this.resetSimon(1)}>
            {!round ? 'Start Game' : 'Reset Game'}
          </button>
        </div>
      </div>
    );
  }
}

export default SimonGame;
