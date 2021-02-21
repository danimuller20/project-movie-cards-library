import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(Array),
};

MovieList.defaultProps = {
  movies: {},
};

export default MovieList;
