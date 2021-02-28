import React from 'react';
// import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { this.props.movies.map((movie) => <MovieCard filme={ movie } key={ movie.title }/>) }
      </div>
    );
  }
}

export default MovieList;
