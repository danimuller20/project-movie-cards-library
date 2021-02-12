// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MoveiList extends React.Component {
  render() {
    const { movies } = this.props;
    return <div>{movies.map(movie => <MovieCard movie={movie} key={movie.title}/>)}</div>
   
  }
}

MoveiList.propTypes = {
  movies: PropTypes.array,
}

export default MoveiList;
