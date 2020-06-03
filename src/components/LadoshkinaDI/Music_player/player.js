import React from 'react';
import styles from './player-style.module.css';

class MusicPlayer extends React.Component {
  track = {
    name: 'One',
    artist: 'Marcel Pequel',
    cover: 'http://cdn.atrera.com/images/cover_yz2mak.jpg',
    source: 'http://cdn.atrera.com/audio/Marcel_Pequel_-_01_-_One.mp3',
    duration: '1:32',
  }

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentTime: 0,
      timer: null,
    };
  }

  showTime = () => {
    this.state.timer = setInterval(() => this.changeBar(), 500);
  }

  changeBar = () => {
    const progressBar = document.getElementById('length');
    const currentTimeIndicator = document.querySelector('.music_time__current');
    const leftTimeIndicator = document.querySelector('.music_time__last');
    const audio = document.getElementById('audio');
    const percentage = (audio.currentTime / audio.duration).toFixed(3);
    progressBar.style.transition = '';

    // set current time
    const minute = Math.floor(audio.currentTime / 60);
    const second = Math.floor(audio.currentTime % 60);
    const leftTime = audio.duration - audio.currentTime;
    currentTimeIndicator.innerHTML = `${(`0${minute}`).substr(-2)}:${(`0${second}`).substr(-2)}`;

    // set left time
    const leftMinute = Math.floor(leftTime / 60);
    const leftSecond = Math.floor(leftTime % 60);

    leftTimeIndicator.innerHTML = `${(`0${leftMinute}`).substr(-2)}:${(`0${leftSecond}`).substr(-2)}`;

    // set time bar
    progressBar.style.width = `${percentage * 100}%`;
  }

  play(e) {
    if (!this.state.isPlaying) {
      e.target.src = 'https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg';
      e.target.alt = 'Pause';
      this.setState({
        isPlaying: true,
      });
      document.getElementById('audio').play();
      this.showTime();
    } else {
      e.target.src = 'https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg';
      e.target.alt = 'Play';
      document.getElementById('audio').pause();
      this.setState({
        isPlaying: false,
      });
      clearInterval(this.state.timer);
    }
  }

  render() {
    return (
      <div className={styles.player}>
        <div className="track_img">
          <img src={this.track.cover} alt="Play" className={styles.track_cover} />
        </div>
        <div className="main_info_track">
          <h2 className={styles.track_name}>{this.track.name}</h2>
          <h3 className="artist_name">{this.track.artist}</h3>
          <div className={styles.music_time}>
            <p className="music_time__current">{this.state.currentTime}</p>
            <p className="music_time__last" id={styles.music_time__last}>{this.track.duration}</p>
          </div>
          <div className={styles.music_bar} id="progress">
            <div id="length" className="length" />
          </div>
          <audio id="audio">
            <source src={this.track.source} />
            <track src="http://cdn.atrera.com/audio/Marcel_Pequel_-_01_-_One.vtt" kind="captions" srcLang="en" />
          </audio>
          <div className={styles.music_control__play} id="play" onClick={(e) => this.play(e)}>
            <img src="https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg" alt="Play" />
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
