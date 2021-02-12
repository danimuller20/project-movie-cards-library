import React from 'react';
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

export default MovieCard;
