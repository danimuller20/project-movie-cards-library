// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie}/>);
    return <div className='movie-list'>{movies}</div>
  }
}

export default MovieList;
