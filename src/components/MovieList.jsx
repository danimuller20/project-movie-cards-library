// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieListRend extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((Film) => <MovieCard key={ Film.title } movie={ Film } />)}

      </div>
    );
  }
}

MovieListRend.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default MovieListRend;
