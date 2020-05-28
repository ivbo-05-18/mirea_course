import React, { useEffect, useState } from 'react';
import Meme from './Meme';

export default function MemeEditor(props) {
  const queryString = require('qs');
  const [createdMeme, setCreatedMeme] = useState(null);
  const [textInputs, setTextInputs] = useState([]);

  const TIP_STYLE = {
    fontSize: '15px',
    color: 'gray',
    margin: '10px 0px',
  };

  useEffect(() => {
    const initialTextInputs = [];
    for (let i = 0; i < props.meme.box_count; i++) {
      initialTextInputs.push({ text: '' });
    }
    setTextInputs(initialTextInputs);
  }, []);

  async function submitMeme(e) {
    e.preventDefault();
    const body = {
      template_id: props.meme.id,
      boxes: textInputs,
      username: 'trpoCourse',
      password: '12345678',
    };
    const options = {
      indices: true,
      encode: false,
    };

    const response = await fetch(`https://api.imgflip.com/caption_image?${queryString.stringify(body, options)}`);
    const responseMeme = await response.json();
    setCreatedMeme(responseMeme.data.url);
  }

  const handleInputChange = (index, e) => {
    const values = [...textInputs];
    values[index].text = e.target.value;
    setTextInputs(values);
  };


  const inputs = [];
  for (let i = 0; i < props.meme.box_count; i++) {
    inputs.push(
      <div>
        <input name={`input-${i}`} placeholder={`текст №${i + 1}`} onChange={(e) => handleInputChange(i, e)} />
      </div>,
    );
  }

  return (
    <>
      {createdMeme ? (
        <img src={createdMeme} alt="your created meme!" style={{ width: 350 }} />
      ) : (
        <div className="meme-editor" style={{ display: 'block' }}>
          <Meme meme={props.meme} />
          <hr />
          <div className="meme-editor-inputs">
            <p style={TIP_STYLE}>Добавьте надписи к мему</p>
            <form onSubmit={submitMeme}>
              {inputs}
              <div>
                <button type="submit">создать мемес</button>
              </div>
            </form>
          </div>
        </div>
      ) }
    </>
  );
}
