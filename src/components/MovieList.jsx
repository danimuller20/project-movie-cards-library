// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.forEach((element) => <MovieCard />)}
      </div>
    )
  }
}


export default MovieList;
