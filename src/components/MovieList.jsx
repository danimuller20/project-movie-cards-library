import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((item) => <MovieCard key={ item.title } card={ item } />)}
      </div>
    );
  }
}
export default MovieList;
