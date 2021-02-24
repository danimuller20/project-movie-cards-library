// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => {
          return <MovieCard key={movie.title}/>
        })}
      </div>
    )
  }
}

export default MovieList;
