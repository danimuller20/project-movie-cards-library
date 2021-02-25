// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <img src={ movies.imagePath } alt="ImagemDoFilme" />
        <h4>
          {movies.title}
        </h4>
        <h5>
          {movies.subtitle}
        </h5>
        <p>
          {movies.storyline}
        </p>
        <Rating rating={ movies.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }.isRequired,
};

export default MovieCard;
