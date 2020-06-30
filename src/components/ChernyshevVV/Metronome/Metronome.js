import React, { Component } from 'react';

// Webpack will load the audio files
import click1 from './click1.wav';
import click2 from './click2.wav';

const STYLE = {
  metronome: {
    textAlign: 'center',
    maxWidth: '375px',
    margin: '0 auto',
    padding: '30px',
    color: 'black',
  },
  bpmSliderInput: {
    width: '100%',
    margin: '10px',
  },
  metronomeButton: {
    background: '#C94D46',
    padding: '10px',
    border: '1px solid #832420',
    borderRadius: '2px',
    width: '100px',
    color: '#fff',
    fontSize: '18px',
  },
};

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4,
    };

    // Create Audio objects with the files Webpack loaded,
    // and we'll play them later.
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    // The first beat will have a different sound than the others
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    // Keep track of which beat we're on
    this.setState((state) => ({
      count: (state.count + 1) % state.beatsPerMeasure,
    }));
  }

  startStop = () => {
    const { playing } = this.state;
    const { bpm } = this.state;
    if (playing) {
      // Stop the timer
      clearInterval(this.timer);
      this.setState({
        playing: false,
      });
    } else {
      // Start a timer with the current BPM
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      this.setState({
        count: 0,
        playing: true,
        // Play a click "immediately" (after setState finishes)
      }, this.playClick);
    }
  }

  handleBpmChange = (event) => {
    const { playing } = this.state;
    const bpm = event.target.value;

    if (playing) {
      // Stop the old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      // Set the new BPM, and reset the beat counter
      this.setState({
        count: 0,
        bpm,
      });
    } else {
      // Otherwise just update the BPM
      this.setState({ bpm });
    }
  }

  render() {
    const { playing, bpm } = this.state;

    return (
      <div style={STYLE.metronome}>
        <div className="bpm-slider">
          <div>
            {bpm}
            {' '}
            BPM
          </div>
          <input
            style={STYLE.bpmSliderInput}
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange}
          />
        </div>
        <button
          type="button"
          style={STYLE.metronomeButton}
          onClick={this.startStop}
        >
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default Metronome;
