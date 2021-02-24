import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return movies.map((element) => <MovieCard key={ element.title } movie={ element } />);
  }
}

export default MovieList;
