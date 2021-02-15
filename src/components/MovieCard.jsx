// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    const indexMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
    };

    return (
      <section>
        <img src={ indexMovie.imagePath } alt={ indexMovie.title } />
        <h4>{ indexMovie.title }</h4>
        <h5>{ indexMovie.subtitle }</h5>
        <p>{ indexMovie.storyline }</p>
        <Rating rating={ indexMovie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.number,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.imagePath,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieCard;
