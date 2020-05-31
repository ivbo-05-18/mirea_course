import React from 'react';
import PropTypes from 'prop-types';

export default class Flag extends React.Component {
  render() {
    const { Greet } = this.props;
    return (
      <img alt="flag" data-testid="flag-img" src={`https://www.countryflags.io/${Greet.alphacode}/shiny/64.png`} />
    );
  }
}

Flag.propTypes = {
  Greet: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    alphacode: PropTypes.string.isRequired,
  }).isRequired,
};
