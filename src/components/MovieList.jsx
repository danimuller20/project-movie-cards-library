import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      this.props.movie.map((item) => <MovieCard key={item.title} cardItem={item} />)
    );
  }
}

export default MovieList;
