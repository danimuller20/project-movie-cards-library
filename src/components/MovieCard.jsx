import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="Texto Alternativo" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
