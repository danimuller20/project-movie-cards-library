// implement MovieCard component here
import React from 'react';

const MovieCard = (prop) => (
  <div className="movie-card">
    <img src={ prop.movie.imagePath } className="movie-card-image" alt="movie-image"/>
    <div className="movie-card-body">
      <h2 className="movie-card-title">{ prop.movie.title }</h2>
      <h3 className="movie-card-subtitle">{ prop.movie.subtitle }</h3>
      <p className="movie-card-storyline">{ prop.movie.storyline }</p>
    </div>
    <div className="movie-card-rating">
      <div className="rating">
        <p>{prop.movie.rating}</p>
      </div>
    </div>
  </div>
);

export default MovieCard;
