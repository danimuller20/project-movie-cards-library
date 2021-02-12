import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      {this.props.movies.maps((currentMovie, index) => <MovieCard movie={currentMovie} key={index} />)}
    );
  }
}

export default MovieList;
