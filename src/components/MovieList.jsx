import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((item) => <MovieCard key={ item.title } card={ item } />)}
      </div>
    );
  }
}
export default MovieList;
