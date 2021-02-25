import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (

      <section className="movie-card">
        <img
          src={ imagePath }
          alt={ `Banner from ${title}` }
          className="movie-card-image"
        />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <Rating rating={ rating } />
        <p className="movie-card-storyline">{ storyline }</p>
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'Movie Title',
      subtitle: 'Movie Title',
      storyline: 'Movie Storyline',
      rating: 'Movie rating',
      imagePath: 'File path to Movie banner',
    },
  ],
};

export default MovieCard;
