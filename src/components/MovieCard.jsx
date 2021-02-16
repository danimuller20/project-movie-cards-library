import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
    } = movie;

    return (
      <article className="movie-card">
        <figure>
          <img src={ imagePath } alt={ title } />
        </figure>
        <header>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
        </header>
        <Rating rating={ rating } />
        <details>
          <summary>Plot</summary>
          <p>{ storyline }</p>
        </details>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
