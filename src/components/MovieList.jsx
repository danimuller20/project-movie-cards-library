import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MovieList;
