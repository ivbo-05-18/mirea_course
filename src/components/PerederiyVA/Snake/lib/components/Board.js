/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import Food from './Food';
import Snake from './Snake';
import GameOver from './GameOver';
import utils from '../utils';

class Board extends Component {
    static defaultProps = {
      sound: true,
    };

    state = {
      refreshRate: 200,
      scale: 10,
      columns: 25,
      rows: 25,
      direction: 'right',
      segments: [{
        x: 2,
        y: 0,
      }, {
        x: 1,
        y: 0,
      }, {
        x: 0,
        y: 0,
      }],
      food: null,
      lastDirection: null,
      lastPosition: {
        x: 2,
        y: 0,
      },
      dead: false,
      score: 0,
      highScore: 0,
      timer: null,
      changeDirectionTimeout: null,
      lastEat: Date.now(),
    };

    componentDidMount() {
      const container = document.getElementById('snake-container').parentElement;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const boardWidth = containerWidth - 4;
      const boardHeight = containerHeight - 34;

      const scale = Math.floor(boardWidth / this.state.columns);

      this.setState({
        boardWidth,
        boardHeight,
        scale,
        rows: Math.floor(boardHeight / scale),
      }, () => this.restart());

      utils.attachEvent(window, 'keydown', this.changeDirection.bind(this));
    }

    componentWillUnmount() {
      utils.detachEvent(window, 'keydown', this.changeDirection.bind(this));
      this.stopTimer();
    }

    restart = () => {
      this.setState({
        direction: 'right',
        grid: this.state.grid || this.getGrid(),
        segments: [{
          x: 2,
          y: 0,
        }, {
          x: 1,
          y: 0,
        }, {
          x: 0,
          y: 0,
        }],
        food: null,
        lastDirection: null,
        lastPosition: {
          x: 2,
          y: 0,
        },
        dead: false,
        score: 0,
      }, () => this.placeFood());
    };

    playSound = (action) => {
      if (this.props.sound !== true) return;

      let audioClipName = null;
      switch (action) {
        case 'eat':
          audioClipName = 'eat-food';
          break;
        case 'die':
          audioClipName = 'die';
          break;
        case 'move':
          audioClipName = 'tick';
          break;
        case 'change-direction':
          audioClipName = 'woosh';
          break;
        default:
          break;
      }

      if (audioClipName == null) return;

      utils.playAudioClip(audioClipName);
    }

    getSpeed = () => {
      const frequency = this.state.refreshRate - (6 * this.state.segments.length);
      return Math.max(30, frequency);
    };

    getScoreForMove = () => {
      const foodEaten = this.state.segments.length - 3;
      const thisFoodScore = (foodEaten * foodEaten * 100);
      const timeSinceLastEat = Date.now() - this.state.lastEat;
      const bonusTime = foodEaten > 0 ? (Math.max(0, 10000 - timeSinceLastEat) * Math.ceil(foodEaten / 5)) : 0;
      const score = thisFoodScore + bonusTime;
      return score;
    };

    startTimer = () => {
      if (this.state.timer != null) {
        clearInterval(this.state.timer);
      }

      const speed = this.getSpeed();
      const timer = setInterval(this.move.bind(this), speed);

      this.setState({
        timer,
      }, () => this.move());
    };

    stopTimer = () => {
      clearInterval(this.state.timer);
      this.setState((prevState) => ({ timer: null }));
    } ;

    getFoodCoordinates = () => {
      let point = null;
      while (point == null || this.doesPointIntersect(point, this.state.segments)) {
        point = utils.getRandomCoordinates(this.state.columns, this.state.rows);
      }
      return point;
    };

    placeFood = (previousFood) => {
      const scoreForMove = this.getScoreForMove();
      const score = this.state.score + scoreForMove;
      const highScore = localStorage.getItem('snake-high-score') || 0;

      let scoreLocation = null;
      if (previousFood != null) {
        scoreLocation = {
          points: scoreForMove,
          x: previousFood.x,
          y: previousFood.y,
        };
      }

      const food = this.getFoodCoordinates();

      this.setState({
        food,
        score,
        scoreLocation,
        highScore,
        lastEat: Date.now(),
      }, () => this.startTimer());
    };

    changeDirection = (e) => {
      if (this.state.changeDirectionTimeout != null) {
        clearTimeout(this.state.changeDirectionTimeout);
      }

      if (
        typeof e === 'object'
            && e.keyCode === 13
            && this.state.dead
      ) return this.restart();

      const head = this.state.segments[0];

      const nextDirection = typeof e === 'string' ? e : utils.getDirectionFromKeyCode(this.state.direction, e.keyCode);

      if (this.state.lastDirection != null && utils.isSamePosition(head, this.state.lastPosition)) {
        if (utils.isInverseDirection(nextDirection, this.state.lastDirection)) {
          const timeout = setTimeout(() => this.changeDirection(e), 100);
          return this.setState({
            changeDirectionTimeout: timeout,
          });
        }
      }

      if (nextDirection === this.state.direction) return;

      this.playSound('change-direction');

      this.setState({
        direction: nextDirection,
        lastDirection: this.state.direction,
        lastPosition: {
          x: head.x,
          y: head.y,
        },
      }, () => this.startTimer());
    };

    move = () => {
      if (this.state.dead) return;

      const segments = this.state.segments.slice(0);
      const removed = segments.pop();

      const head = segments.length < 1 ? {
        x: removed.x,
        y: removed.y,
      } : {
        x: segments[0].x,
        y: segments[0].y,
      };

      switch (this.state.direction) {
        case 'left':
          head.x--;
          break;
        case 'up':
          head.y--;
          break;
        case 'down':
          head.y++;
          break;
        case 'right':
        default:
          head.x++;
          break;
      }

      let dead = false;

      if (head.x < 0) dead = true;
      if (head.y < 0) dead = true;
      if (head.x > this.state.columns - 1) dead = true;
      if (head.y > this.state.rows - 1) dead = true;

      segments.unshift(head);

      const ateFood = utils.isSamePosition(head, this.state.food);
      if (ateFood) {
        segments.push(removed);
      }

      dead = dead || this.doesPointIntersect(segments[0], segments);

      let highScore = localStorage.getItem('snake-high-score') || 0;
      if (dead && (highScore == null || this.state.score > highScore)) {
        highScore = this.state.score;
        localStorage.setItem('snake-high-score', highScore);
      }

      const previousFood = this.state.food;

      this.setState({
        segments,
        dead,
        food: ateFood ? null : this.state.food,
        scoreLocation: ateFood ? null : this.state.scoreLocation,
      }, () => {
        if (this.state.dead) {
          this.playSound('die');
        } else if (ateFood) {
          this.playSound('eat');
          this.placeFood(previousFood);
        } else {
          this.playSound('move');
        }
      });
    };

    doesPointIntersect = (point, segments) => segments.length > 1 && segments.some((position, i) => i > 0 && utils.isSamePosition(position, point));

    getGrid = () => {
      const borderColor = this.state.dead ? '#666' : '#ccc';
      const tiles = [];
      for (let y = 0; y < this.state.rows; y++) {
        for (let x = 0; x < this.state.columns; x++) {
          tiles.push((
            <div
              key={`tile-${x}-${y}`}
              style={{
                position: 'absolute',
                height: this.state.scale,
                width: this.state.scale,
                top: this.state.scale * y,
                left: this.state.scale * x,
                // borderLeft : x > 0 ? `1px solid ${borderColor}` : 'none',
                // borderBottom : y < this.state.columns - 1 ? `1px solid ${borderColor}` : 'none'
              }}
            />
          ));
        }
      }
      return tiles;
    };

    enforceMinMax = (value, min, max) => Math.max(min, Math.min(max, value));

    getScoreLocation = () => {
      if (this.state.scoreLocation == null) return null;

      let top = this.state.scale * this.state.scoreLocation.y;
      let left = this.state.scale * this.state.scoreLocation.x;

      const minTop = 50;
      const maxTop = this.state.boardHeight - minTop;

      const minLeft = 100;
      const maxLeft = this.state.boardWidth - minLeft;

      top = this.enforceMinMax(top, minTop, maxTop);
      left = this.enforceMinMax(left, minLeft, maxLeft);

      return { top, left };
    };

    render() {
      const scoreLocation = this.getScoreLocation();

      return (
        <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
        >

          <style type="text/css" scoped>
            {'<Inject>../css/index.css</Inject>'}
          </style>

          <div style={{
            height: 30,
            fontSize: Math.max(10, this.state.scale * 0.6),
          }}
          >
            <div style={{
              float: 'left',
              color: '#000',
            }}
            >
              <strong>High Score:</strong>
              {utils.addCommas(this.state.highScore)}
            </div>

            <div style={{
              float: 'left',
              marginLeft: 10,
              color: '#000',
            }}
            >
              <strong>Score:</strong>
              {utils.addCommas(this.state.score)}
            </div>
          </div>
          <div
            id="snake-container"
            onClick={this.state.dead ? this.restart : () => {}}
            style={{
              width: this.state.scale * this.state.columns,
              height: this.state.scale * this.state.rows,
              position: 'relative',
              backgroundColor: '#333',
              border: '2px solid #ccc',
              boxShadow: '1px 2px 8px 0px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              'margin-left': 'auto',
              'margin-right': 'auto',
            }}
          >

            {this.state.grid}

            <Snake {...this.state} />
            <Food {...this.state} {...this.state.food} />

            {scoreLocation && (
            <div
              className="score"
              style={{
                opacity: 0,
                position: 'absolute',
                top: scoreLocation.top,
                left: scoreLocation.left,
                width: 1000,
                height: 200,
                textAlign: 'center',
              }}
            >
              <div style={{
                position: 'relative',
                left: '-50%',
                top: '-50%',
                color: '#0f79d6',
                textShadow: '0px 0px 10px #333',
              }}
              >
                +
                {this.state.scoreLocation.points}
              </div>
            </div>
            )}

            {this.state.dead && <GameOver restart={this.restart} />}
          </div>
        </div>
      );
    }
}

export default Board;
