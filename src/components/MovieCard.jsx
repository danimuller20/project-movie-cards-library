import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={ this.props.movie.imagePath }
          alt="Banner do filme"
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ this.props.movie.title }</h4>
          <h5 className="movie-card-subtitle">{ this.props.movie.subtitle }</h5>
          <p className="movie-card-storyline">{ this.props.movie.storyline }</p>
        </div>
        <Rating rating={ this.props.movie.rating } />
      </div>
    );
  }
}

export default MovieCard;
