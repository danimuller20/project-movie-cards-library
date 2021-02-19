import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movies;
    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <img src={imagePath} alt='filme'/>
        <p>{rating}</p>
      </div>
    );
  }
}

export default MovieCard;