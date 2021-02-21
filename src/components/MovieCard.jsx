import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <h4>{ this.props.title }</h4>
        <h5>{ this.props.subtitle }</h5>
        <img src={ this.props.imagePath } />
        <p>{ this.props.storyline }</p>
        <Rating rating={ this.props.rating }/>
      </div>
    );
  }
}

export default MovieCard;
