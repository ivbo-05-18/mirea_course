import React, { useState } from 'react';
import Meme from './Meme';

export default function MemeCreator(props) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [createdMeme, setCreatedMeme] = useState(null);

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
        <img src={createdMeme} alt="your created meme!" />
      ) : (
        <div className="meme-editor">
          <Meme meme={props.meme} />
          <div className="meme-editor-inputs">
            <form onSubmit={submitMeme}>
              <input placeholder="надпись сверху" value={topText} onChange={(e) => { setTopText(e.target.value); }} />
              <input placeholder="надпись снизу" value={bottomText} onChange={(e) => { setBottomText(e.target.value); }} />
              <button type="submit">создать мемес</button>
            </form>
          </div>
        </div>
      ) }
    </>
  );
}
