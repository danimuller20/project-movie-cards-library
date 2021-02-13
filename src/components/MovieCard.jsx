import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="Imagem do filme"/>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyLine }</p>
        <Rating rating={ movie.rating }/>
      </div>
    );
  }
}

export default MovieCard;
