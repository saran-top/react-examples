import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

export default ({video}) => {
  if(!video) {
    return <div><CircularProgress size={50} /></div>;
  }
  const id = video.id.videoId;
  const url = `https://www.youtube.com/embed/${id}`;
  return ( 
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe className="embed-responsive-item" src={url} title={video.snippet.title}></iframe>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="title" color="inherit">
          {video.snippet.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" color="inherit">
          {video.snippet.description}
        </Typography>
      </Grid>
    </Grid>
  );
};
