import React, { Component } from "react";
import Result from "./Result";

const BODY_STYLE = {
  border: "1px solid black",
  maxWidth: "550px",
  margin: "auto",
};

const LYRICS_STYLE = {
  fontSize: "15px",
  border: "1px solid black",
  padding: "10px",
  margin: "15px auto",
  width: "80%",
  maxWidth: "400px",
  fontStyle: "italic",
};

const FIELDSET_STYLE = {
  display: "flex",
  "flex-direction": "column",
  margin: "5px auto",
  width: "80%",
  maxWidth: "400px",
};

const LEGEND_STYLE = {
  width: "fit-content",
};

const BUTTON_STYLE = {
  fontSize: "14px",
  marginTop: "10px",
  padding: "10px",
};

const apikey = "0ef107a60ea1a212417c4588e5404906";
const apiLink =
  "http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/";

class GuessTheSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackList: [],
      correctTrackID: 0,
      lyrics: "",
      correct: 0,
      isLoading: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonID) {
    if (buttonID === this.state.correctTrackID) {
      this.setState((state) => ({ correct: 1 }));
    } else {
      this.setState((state) => ({ correct: 2 }));
    }
  }

  componentDidMount() {
    fetch(
      apiLink +
        "chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&&apikey=" +
        apikey
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState((state, props) => ({
          trackList: json.message.body.track_list,
          correctTrackID:
            json.message.body.track_list[Math.floor(Math.random() * 4)].track
              .track_id,
        }));

        fetch(
          apiLink +
            "track.lyrics.get?track_id=" +
            this.state.correctTrackID +
            "&&apikey=" +
            apikey
        )
          .then((response) => response.json())
          .then((json) => {
            var lyrics = JSON.stringify(json.message.body.lyrics.lyrics_body)
              .split("\\n")
              .filter(function (x) {
                return x !== "";
              });

            var length = Math.floor(Math.random() * (lyrics.length - 7)) + 1;

            this.setState((state, props) => ({
              lyrics: lyrics.slice(length, length + 4).join("<br/>"),
              isLoading: false,
            }));
          });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    } else {
      return (
        <div style={BODY_STYLE}>
          <h3>Угадай песню</h3>

          <p
            dangerouslySetInnerHTML={{
              __html: this.state.lyrics,
            }}
            style={LYRICS_STYLE}
          />

          <fieldset style={FIELDSET_STYLE}>
            <legend style={LEGEND_STYLE}>Ваш ответ:</legend>

            {this.state.trackList.map((item) => (
              <button
                key={item.track.track_id}
                value={item.track.track_id}
                style={BUTTON_STYLE}
                onClick={() => {
                  this.handleClick(item.track.track_id);
                }}
              >
                <b>{item.track.artist_name}</b> <br /> {item.track.track_name}
              </button>
            ))}
          </fieldset>

          <p>
            {this.state.correct !== 0 ? (
              <Result correct={this.state.correct} />
            ) : (
              ""
            )}
          </p>
        </div>
      );
    }
  }
}

export default GuessTheSong;
