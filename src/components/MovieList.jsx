import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((filme) => <MovieCard key={ filme } />)
    );
  }
}

export default MovieList;
