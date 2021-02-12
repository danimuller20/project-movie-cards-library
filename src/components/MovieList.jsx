import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <p>Movie List</p>
        <MovieCard movie={this.props.movies} />
      </main>
    );
  }
}

export default MovieList;