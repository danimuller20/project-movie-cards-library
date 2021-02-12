import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.maps((currentMovie, index) => <MovieCard movie={currentMovie} key={index} />)}
      </div>
    );
  }
}

export default MovieList;
