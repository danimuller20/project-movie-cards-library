import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types'

const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ))}
  </div>);

MovieList.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number
    })
  )
}
export default MovieList;
