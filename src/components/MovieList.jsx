// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from './prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.object,
  key: PropTypes.sting,
}

export default MovieList;
