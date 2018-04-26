import _ from 'lodash';
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import './Main.css';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.searchVideo('surfboards');
  }

  searchVideo(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({videos: videos});
      this.setState({selectedVideo: videos[0]});
    });
  }

  render () {
    const videoSearch = _.debounce(term => {this.searchVideo(term)}, 300);
    return (
      <div className="main-container">
        <Grid container justify="center" spacing={8}>
          <Grid item xs={12}>
            <Paper elevation={4} className="paper">
              <SearchBar onSearchTermChange={videoSearch}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper elevation={4} className="paper">
              <VideoDetail video={this.state.selectedVideo} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={4} className="paper">
              <VideoList 
                videos={this.state.videos} 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
