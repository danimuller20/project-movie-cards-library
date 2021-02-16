import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />)
    );
  }
}

MovieList.protoTypes = {
  movies: PropTypes.array,
}
export default MovieList;
