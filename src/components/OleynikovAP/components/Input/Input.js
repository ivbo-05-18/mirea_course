import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    name,
    onChangeInput,
    value,
    span,
  } = props;


  return (
    <div className={`Input_${name}`}>
      <input
        type="text"
        onChange={onChangeInput}
        value={value}
        size={1}
        name={name}
      />
      <span>{span || ''}</span>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  span: PropTypes.string.isRequired,
};

export default Input;
