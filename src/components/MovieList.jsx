// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        {movies.map((filme) => <MovieCard movie={ filme } key={ filme.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.object,
  ),
};

MovieList.defaultProps = {
  movies: 'error',
};

export default MovieList;
