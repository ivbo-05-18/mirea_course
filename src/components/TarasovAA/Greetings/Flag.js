import React from 'react';
import PropTypes from 'prop-types';

export default function Flag(props) {
  const { Greet } = props;
  return (
    <img alt="flag" data-testid="flag-img" src={`https://www.countryflags.io/${Greet.alphacode}/shiny/64.png`} />
  );
}

Flag.propTypes = {
  Greet: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    alphacode: PropTypes.string.isRequired,
  }).isRequired,
};
