// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card movie-card-body">
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <img src={ imagePath } alt="" className="movie-card-image" />
        <Rating rating={ rating } />
      </div>
    );
  }
}


export default MovieCard;
