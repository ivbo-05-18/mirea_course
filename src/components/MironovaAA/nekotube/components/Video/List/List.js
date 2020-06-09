import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const List = (props) => {
  const { videos, selectedVideo, onVideoClicked } = props;
  console.log(props);
  const Items = videos.map((video) => {
    if (selectedVideo !== video) {
      return (
        <Item
          video={video}
          key={video.id.videoId}
          onVideoClicked={onVideoClicked}
        />
      );
    }
    return (<div>Hi</div>);
  });

  return (
    <ul className="col-md-4 list-group">
      {Items}
    </ul>
  );
};

List.propTypes = {
  videos: PropTypes.shape.isRequired,
  selectedVideo: PropTypes.shape.isRequired,
  onVideoClicked: PropTypes.func.isRequired,
};

export default List;
