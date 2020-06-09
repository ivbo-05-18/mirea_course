import React, { useState } from 'react';

function App() {
  const [bombs, setBombs] = useState([]);
  const [visited, setVisited] = useState([]);

  const buttonStyle = {
    width: 40,
    height: 40,
    backgroundColor: '#888',
    color: 'black',
    verticalAlign: 'top',
    fontSize: '32px',
    borderLeft: '5px solid rgb(220,220,220)',
    borderTop: '5px solid rgb(220,220,220)',
    borderBottom: '5px solid #333',
    borderRight: '5px solid #333',
    display: 'inline-block',
  };
  const visitStyle = {
    width: 48,
    height: 48,
    backgroundColor: '#555',
    color: 'white',
    fontWeight: 'bold',
    border: '1px solid black',
    verticalAlign: 'top',
    fontSize: '32px',
    display: 'inline-block',
  };

  const APP_STYLES = {
    textAlign: 'center',
  };

  const GENERATE_STYLES = {
    width: '150px',
    border: '2px solid white',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
  };

  const APP_HEADER_STYLES = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  };


  const generateBombs = () => {
    const bombArr = Array(10).fill(0).map(() => Array(10).fill(0));

    for (let i = 0; i < bombArr.length; i++) {
      const bombPos = Math.floor(Math.random() * 10);
      bombArr[i][bombPos] = 'X';
    }

    for (let i = 0; i < bombArr.length; i++) {
      for (let j = 0; j < bombArr[i].length; j++) {
        if (bombArr[i][j] !== 'X') {
          let sum = 0;

          if (i > 0 && bombArr[i - 1][j] === 'X') { sum += 1; }
          if (i < bombArr.length - 1 && bombArr[i + 1][j] === 'X') { sum += 1; }
          if (j < bombArr.length - 1 && bombArr[i][j + 1] === 'X') { sum += 1; }
          if (j > 0 && bombArr[i][j - 1] === 'X') { sum += 1; }
          if (i < bombArr.length - 1 && j > 0 && bombArr[i + 1][j - 1] === 'X') { sum += 1; }
          if (i < bombArr.length - 1 && j < bombArr.length - 1 && bombArr[i + 1][j + 1] === 'X') { sum += 1; }
          if (i > 0 && j > 0 && bombArr[i - 1][j - 1] === 'X') { sum += 1; }
          if (i > 0 && j < bombArr.length - 1 && bombArr[i - 1][j + 1] === 'X') { sum += 1; }

          bombArr[i][j] = sum;
        }
      }
    }
    setBombs(bombArr);

    const cover = Array(10).fill(0).map(() => Array(10).fill(0));
    setVisited(cover);
  };

  function dfsCells(i, j) {
    if (i < 0 || i > visited.length - 1 || j < 0 || j > visited[0].length - 1 || visited[i][j] === 1 || bombs[i][j] === 'X') { return; }

    visited[i][j] = 1;

    setVisited([...visited]);
    if (bombs[i][j] < 1) {
      dfsCells(i + 1, j);
      dfsCells(i - 1, j);
      dfsCells(i, j + 1);
      dfsCells(i, j - 1);
    }
  }

  const visitCell = (i, j) => {
    if (bombs[i][j] === 'X') {
      alert('You lost! Generate again!');
      window.location.reload();
    }
    dfsCells(i, j);
    visited[i][j] = 1;
    setVisited([...visited]);
  };

  const ternaryExp = (a, b, c) => {
    if (a) {
      return null;
    } if (b) {
      return '';
    }
    return c;
  };

  return (
    <div style={APP_STYLES}>
      <header style={APP_HEADER_STYLES}>

        {bombs.map((arr, index) => (
          <div key={Math.random()}>
            {arr.map((elem, i) => (
              <div
                key={Math.random()}
                role="button"
                tabIndex={0}
                onClick={() => visitCell(index, i)}
                onKeyDown={() => visitCell(index, i)}
                style={visited[index][i] === 0 ? buttonStyle : visitStyle}
              >
                {ternaryExp(visited[index][i] === 0, bombs[index][i] === 0, bombs[index][i])}
              </div>
            ))}
          </div>
        ))}
        <button
          type="button"
          style={GENERATE_STYLES}
          onClick={() => generateBombs()}
        >
          Generate New Game
        </button>
      </header>

    </div>
  );
}

export default App;
