// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
          {this.props.movies.map((movie, index) => {
              return <MovieCard key={index} movie={movie} />
          })}
      </div>
    );
  }
}

export default MovieList;
