import React, { Component } from 'react';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = process.env.REACT_APP_NEKOTUBE;

class Nekotube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }


  componentDidMount() {
    console.log('componentDidMount');
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり' }, (data) => {
      this.setState({ videos: data, selectedVideo: data[2] });
    });
    console.log(this.state);
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

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div className="App">
        <Header onKeywordChanged={this.onKeywordChangedHandler} />
        <Body>
          <Video video={selectedVideo} />
          <List
            videos={videos}
            onVideoClicked={this.onVideoClickedHandler}
            selectedVideo={selectedVideo}
          />
        </Body>
      </div>
    );
  }
}

export default Nekotube;
