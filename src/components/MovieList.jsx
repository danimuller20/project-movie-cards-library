import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props;
    return (
      <div>
        <p>Aqui Movie List</p>
        <MovieCard />
      </div>
    );
  }
}
export default MovieList;
