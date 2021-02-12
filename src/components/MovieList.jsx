import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movieData, index) => (<MovieCard movie={ movieData } key={ index } />));
  }
}

export default MovieList;
