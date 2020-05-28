import React from 'react';

export default function Meme(props) {
  const MEMESTYLE = {
    height: 75,
    width: 75,
  };
  return (
    <img
      style={MEMESTYLE}
      key={props.meme.id}
      src={props.meme.url}
      alt={props.meme.name}
      onClick={props.onClick}
    />
  );
}
