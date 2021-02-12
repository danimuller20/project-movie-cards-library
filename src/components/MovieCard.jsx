import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div>
      <img src={ imagePath } alt={ subtitle } />
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={ rating } />
    </div>
  );
};

MovieCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.string,
}).isRequired;

export default MovieCard;
