// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import { movies } from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
    }),
  ) };

MovieList.defaultProps = {
  movies: ({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.img,
    rating: PropTypes.number,
  }),
};

export default MovieList;
