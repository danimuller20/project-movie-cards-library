import React, {Component} from 'react';
import Moviecard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() { 
    return (
      this.props.movies.map(movie => <Moviecard movie={movie} key={movie.title} />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}
 
export default MovieList;
