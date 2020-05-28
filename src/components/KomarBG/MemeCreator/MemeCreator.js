import React, { useEffect, useState } from 'react';
import MemeEditor from './MemeEditor';
import Meme from './Meme';

export default function MemeCreator() {
  const [memes, setMemes] = useState([]);
  const [curMeme, setCurMeme] = useState(null);
  const MEMES_STYLE = {
    width: 500,
    height: 500,
    overflow: 'auto',
  };
  const DESC_STYLE = {
    fontSize: '15px',
    color: 'gray',
    margin: '10px 0px',
  };


  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then((resp) => resp.json().then((response) => setMemes(response.data.memes)));
  }, []);
  const memesList = memes.map(
    (meme) => (
      <Meme meme={meme} onClick={() => { setCurMeme(meme); }} />
    ),
  );
  return (
    <div className="meme-creator" style={MEMES_STYLE}>
      {curMeme && <MemeEditor meme={curMeme} />}
      {!curMeme && (
      <>
        <p style={DESC_STYLE}>Выберите мем</p>
        {memesList}
      </>
      )}
    </div>
  );
}
