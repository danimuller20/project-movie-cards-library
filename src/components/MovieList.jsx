import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        { this.props.movies.map((movieItem) => {
          <MovieCard movie={ movieItem } key={ movieItem.title } />
          })
        }   
      </div>
    )
  }
}
  export default MovieList;
