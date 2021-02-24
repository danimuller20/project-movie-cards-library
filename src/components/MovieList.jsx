// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((filme, index) => <MovieCard movie={ filme } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
