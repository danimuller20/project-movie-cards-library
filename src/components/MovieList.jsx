import React, {Component} from 'react';
import Moviecard from './MovieCard';

class MovieList extends Component {
  render() { 
    return (
      this.props.movies.map(movie => <Moviecard movie={movie} key={movie.title} />)
    );
  }
}
 
export default MovieList;
