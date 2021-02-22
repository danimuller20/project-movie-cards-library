import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const movieCard = `<div>
    <div>
    <h4>${movie.title}</h4>
    <h5>${movie.subtitle}</h5>
    <p>${movie.storyline}</p>
    </div>
    <div>
    <img src=${movie.imagePath}>
    </div>
    ${<Rating rating={ movie.rating } />}
    </div>`;
    return movieCard;
  }
}
MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
