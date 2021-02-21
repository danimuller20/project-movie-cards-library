import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies, { title, subtile, imagePath, storyline, rating } from '../data'

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
