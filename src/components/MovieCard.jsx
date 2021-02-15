// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

const MovieCard = (prop) => (
  <div className="movie-card">
    <img src={ prop.movie.imagePath } className="movie-card-image" alt="movie-poster" />
    <div className="movie-card-body">
      <h4 className="movie-card-title">{ prop.movie.title }</h4>
      <h5 className="movie-card-subtitle">{ prop.movie.subtitle }</h5>
      <p className="movie-card-storyline">{ prop.movie.storyline }</p>
    </div>
    <div className="movie-card-rating">
      <Rating rating={ prop.movie.rating } />
    </div>
  </div>
);

export default MovieCard;
