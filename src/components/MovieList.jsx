import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movieList-container">
        <MovieList>
          <movieCard/>
        </MovieList>
      </div>
    );
  }
}
export default MovieList;
