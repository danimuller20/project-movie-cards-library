import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const MovieCard = ({ movie }) => (
  <div>
    <h4>{ movie.title }</h4>
    <h5>{ movie.subtitle }</h5>
    <p>{ movie.storyline }</p>
    <img src={ movie.imagePath } alt="movieImage" />
    <Rating rating={ movie.rating } />
  </div>
);

MovieCard.propType = {
  movie: PropTypes.object(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }).isRequired
  ),
};

export default MovieCard;
