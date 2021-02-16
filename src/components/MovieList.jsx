// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {

  static defaultProps = {
    movies: [],
  };

  render() {
    const { listMovies } = this.props.movies;
    const listElements = listMovies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div>
        {listElements}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
