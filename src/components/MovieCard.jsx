import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <section>
        <img src={ imagePath } alt={ `Banner from ${title}` } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <Rating rating={ rating } />
        <p>{ storyline }</p>
      </section>
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
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Movie Title',
    subtitle: 'Movie Title',
    storyline: 'Movie Storyline',
    rating: 0,
    imagePath: 'File path to Movie banner',
  },
};

export default MovieCard;
