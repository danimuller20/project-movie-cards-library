// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import propTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        {movies.map((filme) => <MovieCard movie={ filme } key={ filme.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.object
  )
}

export default MovieList;
