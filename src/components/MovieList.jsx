import React from 'react';
import MovieCard from './MovieCard'
class MovieList extends React.Component {
  render() {
    return (
    this.props.map((movie, index) => <MovieCard key={ index } movie = { movie }/>)
    );
  }
}

export default MovieList;
