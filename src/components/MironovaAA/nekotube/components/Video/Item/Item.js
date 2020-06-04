/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const LIST_GROUP_ITEM_STYLE = {

  listStyle: 'none',

};

const VIDEO_LIST_STYLE = {
  display: 'flex',
  width: '400px',
  alignItems: 'center',
};

const Item = (props) => {
  const { video } = props;
  return (
    <li
      className="list-group-item"
      onClick={() => props.onVideoClicked(video)}
      onKeyDown={() => props.onVideoClicked(video)}
      style={LIST_GROUP_ITEM_STYLE}
    >
      <div

        className="video-list media"
        style={VIDEO_LIST_STYLE}
      >
        <div className="media-left">
          <img className="mr-3" alt="" src={video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
          <h5 className="media-heading">{video.snippet.title}</h5>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  onVideoClicked: PropTypes.func.isRequired,
  video: PropTypes.shape.isRequired,
};

export default Item;
