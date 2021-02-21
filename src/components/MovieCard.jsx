import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const film = this.props.movie
    return (
      <div>
        <h4>{ film.title }</h4>
        <h5>{ film.subtitle }</h5>
        <img src={ film.imagePath } />
        <p>{ film.storyline }</p>
        <Rating rating={ film.rating } />
      </div>
    );
  }
}

export default MovieCard;
