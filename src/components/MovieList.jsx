import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((item) => <MovieCard key={ item.title } movie={ item } />)
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({})).isRequired,
};
export default MovieList;
