/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const quoteBubble = {
  width: 300,
  background: 'white',
  borderRadius: '50%',
  padding: '3rem 4rem',
  margin: '1.5rem',
  textAlign: 'center',
  fontSize: '20px',
};

const hidden = {
  display: 'none',
};

const container = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: 280,
};

function Quotes(props) {
  return (
    <div className="quote-container" style={container}>
      <h2 className="setup" id="setup" style={props.newJoke ? quoteBubble : hidden}>
        {props.setup}
      </h2>
      <h2
        className="punchline"
        id="punchline"
        style={props.newJoke ? hidden : quoteBubble}
      >
        {props.punchline}
      </h2>
    </div>
  );
}

export default Quotes;
