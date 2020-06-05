import React, { Component } from 'react';
import Result from './Result';

const BODY_STYLE = {
  border: '1px solid black',
  maxWidth: '500px',
  margin: 'auto',
};

const LYRICS_STYLE = {
  fontSize: '15px',
  border: '1px solid black',
  padding: '10px',
  margin: '15px auto',
  width: '80%',
  maxWidth: '400px',
  fontStyle: 'italic',
};

const FIELDSET_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  margin: '5px auto',
  width: '80%',
  maxWidth: '400px',
};

const LEGEND_STYLE = {
  width: 'fit-content',
};

const BUTTON_STYLE = {
  fontSize: '14px',
  marginTop: '10px',
  padding: '10px',
};

const apikey = process.env.REACT_APP_MUSICXMATCH_KEY;
const apiLink = 'http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/';

class GuessTheSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: [],
      correctTrackID: 0,
      lyrics: '',
      correct: 0,
      isLoading: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`${apiLink}chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&&apikey=${apikey}`)
      .then((response) => response.json())
      .then((jsonTrack) => {
        this.setState(() => ({
          trackList: jsonTrack.message.body.track_list,
          correctTrackID:
          jsonTrack.message.body.track_list[Math.floor(Math.random() * 4)].track
            .track_id,
        }));

        const { correctTrackID } = this.state;
        fetch(`${apiLink}track.lyrics.get?track_id=${correctTrackID}&&apikey=${apikey}`)
          .then((response) => response.json())
          .then((jsonLyrics) => {
            const lyrics = JSON.stringify(jsonLyrics.message.body.lyrics.lyrics_body)
              .replace(/\\"/g, '"')
              .split('\\n')
              .filter((x) => x !== '');

            const length = Math.floor(Math.random() * (lyrics.length - 7)) + 1;

            this.setState(() => ({
              lyrics: lyrics.slice(length, length + 4).join('<br/>'),
              isLoading: false,
            }));
          });
      });
  }

  handleClick(buttonID) {
    const { correctTrackID } = this.state;

    if (buttonID === correctTrackID) {
      this.setState(() => ({ correct: 1 }));
    } else {
      this.setState(() => ({ correct: 2 }));
    }
  }

  render() {
    const {
      isLoading, lyrics, trackList, correct,
    } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div style={BODY_STYLE}>
        <h3>Угадай песню</h3>

        <div style={LYRICS_STYLE}>
          {lyrics.split('<br/>').map((it) => <p>{it}</p>)}
        </div>

        <fieldset style={FIELDSET_STYLE}>
          <legend style={LEGEND_STYLE}>Ваш ответ:</legend>

          {trackList.map((item) => (
            <button
              key={item.track.track_id}
              type="button"
              value={item.track.track_id}
              style={BUTTON_STYLE}
              onClick={() => {
                this.handleClick(item.track.track_id);
              }}
            >
              <b>{item.track.artist_name}</b>
              {' '}
              <br />
              {' '}
              {item.track.track_name}
            </button>
          ))}
        </fieldset>

        <p>
          {correct !== 0 ? (
            <Result correct={correct} />
          ) : (
            ''
          )}
        </p>
      </div>
    );
  }
}

export default GuessTheSong;
