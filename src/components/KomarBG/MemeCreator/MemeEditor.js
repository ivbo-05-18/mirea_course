import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';

const queryString = require('qs');

export default function MemeEditor(props) {
  const { meme } = props;
  const [createdMeme, setCreatedMeme] = useState(null);
  const [textInputs, setTextInputs] = useState([]);
  const [showingError, setShowingError] = useState(false);

  const TIP_STYLE = {
    fontSize: '15px',
    color: 'gray',
    margin: '10px 0px',
  };
  const ERROR_STYLE = {
    fontSize: '10px',
    color: '#A52A2A',
    margin: '10px 0px',
  };

  useEffect(() => {
    const initialTextInputs = [];
    for (let i = 0; i < meme.box_count; i++) {
      initialTextInputs.push({ text: '' });
    }
    setTextInputs(initialTextInputs);
  }, [meme.box_count]);

  async function submitMeme(e) {
    if (textInputs[0].text === '' && textInputs[1].text === '') {
      setShowingError(true);
      e.preventDefault();
      return;
    }
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
    setShowingError(false);
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
          <Meme meme={meme} />
          <hr />
          <div className="meme-editor-inputs">
            <p style={TIP_STYLE}>Добавьте надписи к мему</p>
            <form onSubmit={submitMeme}>
              {inputs}
              <div>
                <button type="submit">создать мемес</button>
              </div>
            </form>
            {showingError
            && <p style={ERROR_STYLE}>Первое или второе поле должны быть обязательно заполнены</p>}
          </div>
        </div>
      ) }
    </>
  );
}

MemeEditor.propTypes = {
  meme: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    box_count: PropTypes.number.isRequired,
  }).isRequired,
};
