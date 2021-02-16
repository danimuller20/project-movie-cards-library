import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src={ imagePath } alt={ `${title} img` } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
}


export default MovieCard;
