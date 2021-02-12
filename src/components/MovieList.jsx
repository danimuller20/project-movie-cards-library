import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: {},
}

export default MovieList;
