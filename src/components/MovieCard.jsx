import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyLine, rating, imagePath } = movie;
    return (
      <fieldset>
        <h2>{title}</h2>
        <img src={ imagePath } alt="Imagem do filme" />
        <h4>{subtitle}</h4>
        <h5>{storyLine}</h5>
        <span>{rating}</span>
      </fieldset>
    );
  }
}

export default MovieCard;
