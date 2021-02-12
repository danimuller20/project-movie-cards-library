// implement MovieList component here
import React from 'react';
import MovieCard from 'src/components/MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map(movie => <MovieCard data={movie} key={movie.title}/>)}
      </div>
    );
  }
}

export default MovieList;
