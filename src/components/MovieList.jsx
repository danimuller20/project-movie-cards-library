import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        <MovieCard movie={ this.props.movie } />
      </div>
    );
  }
}

export default MovieList;
