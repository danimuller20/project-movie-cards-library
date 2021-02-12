import React from 'react'
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    return this.props.movies.map(movie => {
      return <MovieCard key={movie.title}/>;
    });
  }
}

export default MovieList;