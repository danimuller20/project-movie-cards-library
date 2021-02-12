import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
      </div>
    )
  }
}

export default MovieList;
