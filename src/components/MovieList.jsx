// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MoveiList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => <MovieCard movie={ movie } key={ movie.title }/>);
  }
}

MoveiList.propTypes = {
  movies: PropTypes.array,
};

export default MoveiList;
