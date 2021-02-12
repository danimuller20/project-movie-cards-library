import React from 'react'
// import Data from '../data'

const MovieCard = ({ movie }) => (
  <div>
    <h4>{movie.title}</h4>
    <h5>{movie.subtitle}</h5>
    <p>{movie.storyline}</p>
    <img src={movie.imagePath} />
  </div>
);

export default MovieCard