import React, { Component } from 'react';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = process.env.REACT_APP_NOT_SECRET_ID;

// Вынести в отдельный файл
class Nekotube extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    console.log('componentDidMount');
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり' }, (data) => {
      this.setState({ videos: data, selectedVideo: data[2] });
    });
  }

  onVideoClickedHandler = (video) => {
    console.log('onVideoClickHandler');
    console.log(`video : ${video}`);
    this.setState({ selectedVideo: video });
  }

  onKeywordChangedHandler = (keyword) => {
    console.log('onKeywordChangedHandler');
    console.log(`keyword : ${keyword}`);
    let newTerm = keyword.replace(/\s+/g, '');

    if (newTerm === '') {
      newTerm = 'Miron';
    }
    YSearch({ key: YOUTUBE_API_KEY, term: newTerm }, (data) => {
      this.setState({ videos: data, selectedVideo: data[0] });
    });
  }

  //const {selectedVideo, videos} = this.state;

  render() {
    return (
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler} />
        <Body>
          <Video video={this.state.selectedVideo} />
          <List
            videos={this.state.videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={this.state.selectedVideo}
          />
        </Body>
      </div>
    );
  }
}

export default Nekotube;
