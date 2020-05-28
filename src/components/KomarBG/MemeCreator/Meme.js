import React from 'react';

export default function Meme(props) {
  const MEME_STYLE = {
    height: 75,
    width: 75,
  };
  return (
    <img
      style={MEME_STYLE}
      key={props.meme.id}
      src={props.meme.url}
      alt={props.meme.name}
      onClick={props.onClick}
    />
  );
}
