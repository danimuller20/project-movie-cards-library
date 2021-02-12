import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    const moviesList = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <main>
        { moviesList }
      </main>
    );
  }
}

export default MovieList;
