// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title,subtitle,storyline,imagePath,rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} />;
        <h4>{title}</h4>;
        <h5>{subtitle}</h5>;
        <p>{storyline}</p>;
        <Rating rating={rating} />;
      </div>
    )
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}

export default MovieCard;
