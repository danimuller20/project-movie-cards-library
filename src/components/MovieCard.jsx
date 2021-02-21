import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, imagePath, storyline, rating } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } />
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })
}

export default MovieCard;
