import React, { useState } from 'react';
import Meme from './Meme';

export default function MemeCreator(props) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [createdMeme, setCreatedMeme] = useState(null);

  const TIP_STYLE = {
    fontSize: '15px',
    color: 'gray',
    margin: '10px 0px',
  };

  function objToQueryString(params) {
    return Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
  }

  async function submitMeme(e) {
    e.preventDefault();
    const body = {
      template_id: props.meme.id,
      text0: topText,
      text1: bottomText,
      username: 'trpoCourse',
      password: '12345678',
    };
    const response = await fetch(`https://api.imgflip.com/caption_image?${objToQueryString(body)}`);
    const responseMeme = await response.json();
    setCreatedMeme(responseMeme.data.url);
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
              <div>
                <input placeholder="надпись сверху" value={topText} onChange={(e) => { setTopText(e.target.value); }} />
              </div>
              <div>
                <input placeholder="надпись снизу" value={bottomText} onChange={(e) => { setBottomText(e.target.value); }} />
              </div>
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
