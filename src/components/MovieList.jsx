// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const listMovies = this.props.movies;
    const listElements = listMovies.map(movie => <MovieCard key={ movie.title } movie={ movie }/>)
    return (
      <div>
        {listElements}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies = PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
