import React from 'react';

const VIDEO_STYLE = {
  display: 'flex',
  flexDirection: 'column',
  width: '650px',
}

const Video = (props) => {
if(!props.video){
    return(
        <div className="video col-md-8">
            動画を読込中です
        </div>
    );
}

const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;
    return(
        <div className="video col-md-8"
        style = {VIDEO_STYLE}>
            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={videoURL}></iframe>
            </div>
            <div className="info">
            <h2>{props.video.snippet.title}</h2>
            <p>{props.video.snippet.description}</p>
            </div>
        </div>
        );
}

export default Video;
