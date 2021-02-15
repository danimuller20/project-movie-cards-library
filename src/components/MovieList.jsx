// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movieI) => <MovieCard key={ movieI.title } movie={ movieI } />)}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.number,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.imagePath,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieList;
