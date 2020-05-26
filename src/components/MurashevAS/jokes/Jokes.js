import React from 'react';
import QuoteBox from './QuoteBox';

const title = {
  color: 'white',
  textAlign: 'center',
  marginTop: '3rem',
  fontSize: '14px',
};

const joke = 'A void element tag walks into the bar, but the barmen says: "You are not allowed to have children!"';

function Jokes() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <h1 style={title}>{joke}</h1>
      <QuoteBox />
    </div>
  );
}

export default Jokes;
