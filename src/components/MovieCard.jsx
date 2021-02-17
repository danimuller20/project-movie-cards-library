// implement MovieCard component here
import React from 'react';
const MovieCard = ({movie}) => {
  return (
    <div>
      <img src={movie.imagePath} alt="filme"/>
      <h4>{movie.title}</h4>
      <h5>{movie.subtitle}</h5>
      <p>{movie.storyline}</p>
    </div>
  );
}

export default MovieCard;