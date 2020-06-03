import React from 'react';

const LIST_GROUP_ITEM_STYLE = {

  listStyle: 'none',

};

const VIDEO_lIST_STYLE = {
  display: 'flex',
  width: '400px',
  alignItems: 'center',
};

const Item = (props) => (
  <li
    className="list-group-item"
    onClick={() => props.onVideoClicked(props.video)}
    style={LIST_GROUP_ITEM_STYLE}
  >
    <div
      className="video-list media"
      style={VIDEO_lIST_STYLE}
    >
      <div className="media-left">
        <img className="mr-3" src={props.video.snippet.thumbnails.default.url} />
      </div>
      <div className="media-body">
        <h5 className="media-heading">{props.video.snippet.title}</h5>
      </div>
    </div>
  </li>
);

export default Item;
