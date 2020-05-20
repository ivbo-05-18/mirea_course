import React, { Component } from 'react';

const BUTTON = {
  width: '200px',
  height: '200px',
  fontSize: '200%',
  backgroundColor: 'black',
  color: 'white',
};

const WINS = {
  width: '600px',
  margin: '0 auto',
  textAlign: 'center',
};
const TD = {
  width: '300px',
};
const BOARD = {
  width: '600px',
  height: '600px',
  margin: '0 auto',
};

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      flag: true,
      winner: '',
      wins: {
        X: 0,
        O: 0,
      },
    };
  }

    win = () => {
      const winComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      const { flag, cells, wins } = this.state;
      const value = (flag === true) ? 'X' : 'O';
      for (let i = 0; i < winComb.length; i += 1) {
        const comb = winComb[i];
        if (cells[comb[0]] === value && cells[comb[1]] === value && cells[comb[2]] === value) {
          if (value === 'X') { wins.X += 1; } else if (value === 'O') { wins.O += 1; }
          this.setState({ winner: value, wins });
        }
      }
    }

    changer = (event) => {
      const { id } = event.target;
      const { cells, flag, winner } = this.state;
      if (cells[id] === null && winner === '') {
        cells[id] = (flag === true) ? 'X' : 'O';
        this.setState((prevState) => ({
          cells: prevState.cells, flag: !prevState.flag,
        }));
      }
      this.win();
    }

    clean = () => {
      setTimeout(() => {
        this.setState({ cells: Array(9).fill(null), flag: true, winner: '' });
      }, 2500);
    }

    render() {
      let status;
      const {
        cells, flag, winner, wins,
      } = this.state;
      const draw = cells.some((check) => check === null);
      if (winner === 'X') {
        status = 'Победил X!';
        this.clean();
      } else if (winner === 'O') {
        status = 'Победил O!';
        this.clean();
      } else if (winner === '' && !draw) {
        status = 'Ничья!';
        this.clean();
      } else {
        status = `Кто сейчас играет: ${(flag === true) ? 'X' : 'O'}`;
      }

      return (
        <div>
          <h4 id="status" style={{ margin: 'auto' }}>{status}</h4>
          <table style={WINS}>
            <thead>
              <td style={TD}>X</td>
              <td style={TD}>O</td>
            </thead>
            <tr>
              <td id="X" style={TD}>{wins.X}</td>
              <td id="O" style={TD}>{wins.O}</td>
            </tr>
          </table>
          <table style={BOARD}>
            <tr>
              <td className="td"><button style={BUTTON} type="button" id="0" onClick={this.changer} onKeyDown={this.changer}>{cells[0]}</button></td>
              <td className="td"><button style={BUTTON} type="button" id="1" onClick={this.changer} onKeyDown={this.changer}>{cells[1]}</button></td>
              <td className="td"><button style={BUTTON} type="button" id="2" onClick={this.changer} onKeyDown={this.changer}>{cells[2]}</button></td>
            </tr>
            <tr>
              <td className="td"><button style={BUTTON} type="button" id="3" onClick={this.changer} onKeyDown={this.changer}>{cells[3]}</button></td>
              <td className="td"><button style={BUTTON} type="button" id="4" onClick={this.changer} onKeyDown={this.changer}>{cells[4]}</button></td>
              <td className="td"><button style={BUTTON} type="button" id="5" onClick={this.changer} onKeyDown={this.changer}>{cells[5]}</button></td>
            </tr>
            <tr>
              <td className="td"><button style={BUTTON} type="button" id="6" onClick={this.changer} onKeyDown={this.changer}>{cells[6]}</button></td>
              <td className="td"><button style={BUTTON} type="button" id="7" onClick={this.changer} onKeyDown={this.changer}>{cells[7]}</button></td>
              <td className="td"><button style={BUTTON} type="button" id="8" onClick={this.changer} onKeyDown={this.changer}>{cells[8]}</button></td>
            </tr>
          </table>
        </div>
      );
    }
}

export default TicTacToe;
