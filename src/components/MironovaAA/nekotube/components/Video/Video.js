import React from 'react';
import PropTypes from 'prop-types';

const VIDEO_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  width: '650px',
};


const Video = (props) => {
  const { video } = props;

  if (!video) {
    return (
      <div className="video col-md-8">
        動画を読込中です
      </div>
    );
  }
  Video.propTypes = {
    video: PropTypes.string.isRequired,
  };

  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div
      className="video col-md-8"
      style={VIDEO_STYLE}
    >
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="Selected video" className="embed-responsive-item" src={videoURL} />
      </div>
      <div className="info">
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Video;
