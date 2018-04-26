import React from 'react';
import { ListItem } from 'material-ui/List';

import './VideoListItem.css';

export default ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const imageHeading = video.snippet.title;
  return (
      <ListItem onClick={() => onVideoSelect(video)} className="video-list-item">
        <div className='video-list-item media'>
          <div className='media-left'>
            <img className='media-object' src={imageUrl} alt={imageUrl}/>
          </div>
          <div className='media-body'>
            <div className='media-heading'>
              {imageHeading}
            </div>
          </div>
        </div>
      </ListItem>    
  );
};