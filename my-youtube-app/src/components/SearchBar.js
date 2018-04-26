import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div>
        <TextField
          id="search-input"
          placeholder ="Search Youtube Videos" 
          fullWidth
          margin="normal"
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
