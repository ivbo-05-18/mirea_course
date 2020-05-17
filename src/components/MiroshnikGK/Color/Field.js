import React from 'react';
import PropTypes from 'prop-types';

const field = (props) => {
  const { value } = props;
  const { changed } = props;
  return (
    <div className="inputGK">
      <input type="text" value={value} onChange={changed} />
    </div>
  );
};

field.propTypes = {
  value: PropTypes.string,
  changed: PropTypes.func.isRequired,
};

field.defaultProps = {
  value: '',
};
export default field;
