import React from 'react';
import PropTypes from 'prop-types';

export default function Meme(props) {
  const { meme } = props;
  const { onClick } = props;
  const MEME_STYLE = {
    height: 75,
    width: 75,
  };
  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <img
      style={MEME_STYLE}
      key={meme.id}
      src={meme.url}
      alt={meme.name}
      onClick={onClick}
    />
  );
}

Meme.propTypes = {
  meme: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};
