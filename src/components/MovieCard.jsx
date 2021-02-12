import React from 'react';


const MovieCard = ({ movie }) => {
  const { title, subtitle, storyline, imagePath, rating } = movie;
  <div>
    <img src={imagePath}></img>
  </div>;
};

export default MovieCard;