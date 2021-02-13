// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, index) => {
          return <MovieCard key={index} name= {movie}/>
        })}
      </div>
    )
  }
}

export default MovieList;
