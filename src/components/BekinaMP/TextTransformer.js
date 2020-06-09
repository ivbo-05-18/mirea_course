import React, { useState } from 'react';

const TextTransformer = () => {
  const [info, setInfo] = useState({
    text: '',
  });

  const handleChange = (event) => {
    if (event.target.value.length % 2 === 0) {
      setInfo({
        text: event.target.value.toUpperCase(),
      });
    } else {
      setInfo({
        text: event.target.value.toLowerCase(),
      });
    }
  };
  return (
    <form data-testid="form">
      <label htmlFor="testElement">
        Input Text:
        <br />
        <input id="testElement" type="text" onChange={handleChange} value={info.text} />
      </label>
    </form>
  );
};
export default TextTransformer;
