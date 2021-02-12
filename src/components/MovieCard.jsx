// implement MovieCard component here
import React, { createElement, Component } from 'react';

import PropTypes from 'prop-types';
import Rating from './Rating';

// Ao final, tentar passar a key por essa classe
class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    const image = createElement('img', { src: imagePath });
    const movieTitle = createElement('h4', null, title);
    const movieSubTitle = createElement('h5', null, subtitle);
    const synopsis = createElement('p', null, storyline);

    return (
      createElement('section', null, image, movieTitle, movieSubTitle, synopsis,
        <Rating rating={ rating } />)
      // <section>
      //   {image}
      //   {movieTitle}
      //   {movieSubTitle}
      //   {synopsis}
      //   <Rating rating={ rating } />
      // </section>
    );
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
