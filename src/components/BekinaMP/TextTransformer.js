import React, { useState } from 'react'

const TextTransformer = (props) => {

const [info, setInfo] = useState({
    text: props.text || "",
});  

const handleChange = (event) => {
    if (event.target.value.length % 2 === 0)
        setInfo({text: event.target.value.toUpperCase()});
    else
     setInfo({text: event.target.value.toLowerCase()});
  };
    return(
        <form data-testid="form" >
            <label   id="label-name" htmlFor="test">Input Text:</label><br />
            <input id="test" aria-labelledby="label-name" type="text" onChange={handleChange} value={info.text}  />
        </form>
    )
}
export default TextTransformer