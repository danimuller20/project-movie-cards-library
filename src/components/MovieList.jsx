// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />,
    );
    return (
      <div>
        { moviesList }
      </div>
    );
  }
}

export default MovieList;
