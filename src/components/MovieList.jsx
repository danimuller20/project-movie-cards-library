// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(this.props);
    console.log(movies);
    const elements = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return <div className="movie-list">{elements}</div>;
  }
}
MovieList.propTypes = { movies: PropTypes.array }.isRequired;

export default MovieList;
