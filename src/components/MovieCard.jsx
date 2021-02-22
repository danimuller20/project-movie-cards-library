import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const movieCardElement = `<div>
    <div>
    <div>
    <p>${movie.title}</p>
    <p>${movie.subtitle}</p>
    <p>${movie.storyline}</p>
    </div>
    <div>
    <img src=${movie.imagePath}>
    </div>
    <div>
    <p>${movie.rating}</p>
    </div>
    </div>`;
    return movieCardElement;
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
