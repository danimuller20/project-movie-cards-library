import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map((item) => <MovieCard movie={ item } key={ item.title } />)};
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
