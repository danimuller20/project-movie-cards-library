import React from 'react';


const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
  <div>
    <img src={imagePath}></img>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
    </div>
  )
};

export default MovieCard;