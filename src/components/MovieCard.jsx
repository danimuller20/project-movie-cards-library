import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <img src={ movie.imagePath } alt="" />
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propType = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
}

export default MovieCard;
