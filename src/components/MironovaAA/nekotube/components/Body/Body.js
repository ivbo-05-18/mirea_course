/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const BODY_STYLE = {
  display: 'flex',
  alignItems: 'center',
};

const Body = (props) => (
  <div className="container">
    <div
      className="row"
      style={BODY_STYLE}
    >
      {props.children}
    </div>
  </div>
);

export default Body;
