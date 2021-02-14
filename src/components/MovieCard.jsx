import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt="movie cards" />
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>

      </div>
    );
  }
}

export default MovieCard;
