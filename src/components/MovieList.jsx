import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { this.props.movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

MovieList.defaultProps = {
  movies: {},
};

export default MovieList;
