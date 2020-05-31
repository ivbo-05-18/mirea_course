/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const TextTransformer = () => {
  const [info, setInfo] = useState({
    text: '',
  });

  const handleChange = (event) => {
    if (event.target.value.length % 2 === 0) { setInfo({ text: event.target.value.toUpperCase() }); } else { setInfo({ text: event.target.value.toLowerCase() }); }
  };
  return (
    <form data-testid="form">
      <label htmlFor="test">Input Text:</label>
      <br />
      <input id="test" type="text" onChange={handleChange} value={info.text} />
    </form>
  );
};
export default TextTransformer;
