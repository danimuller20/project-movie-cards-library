import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default function MovieCard(movie) {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <div className="movie-card">
      <img className="movie-card-image" src={ imagePath } alt={ title } />
      <article className="movie-card-body">
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </article>
      <Rating rating={ rating } />
    </div>
  );
}

MovieCard.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  movie: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }.isRequired,
};
