import React, { Component } from 'react';
import Grid from './components/Grid/Grid';
import ColorPickers from './components/ColorPickers/ColorPickers';
import Graph from './Graph';

import './index.css';

const SIZE = 12;
const COLORS = ['blue', 'red', 'green', 'yellow', 'orange'];

class ColorFood extends Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.sliderInput = this.sliderInput.bind(this);
    this.restart = this.restart.bind(this);
    this.colorFill = this.colorFill.bind(this);
    this.state = {
      size: SIZE,
      graph: new Graph(SIZE),
      colors: COLORS,
      count: 0,
    };
  }

  incrementCount() {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  }

  restart() {
    const { size } = this.state;

    this.setState({
      graph: new Graph(size),
      count: 0,
    });
  }

  sliderInput(value) {
    const { colors } = this.state;

    this.setState({
      size: value,
      graph: this.newGrid(value, colors),
      count: 0,
    });
  }

  colorFill(color) {
    const { graph } = this.state;
    graph.colorFill(color);
  }

  render() {
    const {
      count, colors, graph, size,
    } = this.state;
    return (
      <div className="content">
        <div className="header">
          <h1>Color Flood</h1>
          <div
            className="newgame"
            role="button"
            tabIndex="0"
            onClick={() => this.restart()}
            onKeyDown={() => this.restart()}
          >
            New Game
          </div>
          <div className="count">
            Changes
            <span>{count}</span>
          </div>
        </div>
        <ColorPickers
          colors={colors}
          clickHandler={this.colorFill}
          incrementCount={this.incrementCount}
        />
        <Grid grid={graph} colors={colors} size={size} />
      </div>
    );
  }
}

export default ColorFood;
