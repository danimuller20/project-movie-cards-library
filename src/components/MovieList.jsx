import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie }/>) }
      </main>
    );
  }
}

MovieList.propType = {
    movies: PropTypes.object,
    }

export default MovieList;
