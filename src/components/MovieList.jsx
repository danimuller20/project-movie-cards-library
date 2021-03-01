// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import { movies } from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } img={ movie.imagePath } rating={ movie.rating } />)}
      </section>
    );
  }
}

// MovieCard.propTypes= {(
// movi
// )}

export default MovieList;
