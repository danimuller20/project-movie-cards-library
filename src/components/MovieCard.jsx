// implement MovieCard component here
import React, { createElement, Component } from 'react';

import PropTypes from 'prop-types';
import Rating from './Rating';

// Ao final, tentar passar a key por essa classe
class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    const image = createElement('img', { src: imagePath, className: 'movie-card-image' });
    const movieTitle = createElement('h4', { className: 'movie-card-title' }, title);
    const movieSubTitle = createElement('h5',
      { className: 'movie-card-subtitle' }, subtitle);
    const synopsis = createElement('p', { className: 'movie-card-storyline' }, storyline);
    const cardBody = createElement('div',
      { className: 'movie-card-body' }, movieTitle, movieSubTitle, synopsis);
    const movieRating = createElement('div',
      { className: 'movie-card-rating' }, <Rating rating={ rating } />);

    return createElement('section', { className: 'movie-card' },
      image, cardBody, movieRating);
    // <section>
    //   {image}
    //   {movieTitle}
    //   {movieSubTitle}
    //   {synopsis}
    //   <Rating rating={ rating } />
    // </section>
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
