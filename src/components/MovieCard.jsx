import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <img src={ this.props.movie.imagePath } alt="Imagem do filme"/>
        <h4>{ this.props.movie.title }</h4>
        <h5>{ this.props.movie.subtitle }</h5>
        <p>{ this.props.movie.storyLine }</p>
        <Rating rating={ this.props.movie.rating }/>
      </div>
    );
  }
}

export default MovieCard;
