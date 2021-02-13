// implement MovieList component here
import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <main className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${ index + 1 }` } movie={ movie } />
        ))}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.object,
}

export default MovieList;
