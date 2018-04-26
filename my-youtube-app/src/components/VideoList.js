import React from 'react';
import VideoListItem from './VideoListItem';
import List from 'material-ui/List';

export default (props) => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem 
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} 
      />
    );
  });
  return (
    <List>
      {videoItems}
    </List> 
  );
};
