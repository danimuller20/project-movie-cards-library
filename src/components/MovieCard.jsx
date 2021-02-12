import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types'

class MovieCard extends Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt="Banner do filme"
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieCard;
