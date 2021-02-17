import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { key, movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card movie-card-body">
        <h1>{ key }</h1>
        <img src={ imagePath } alt="" className="movie-card-image" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
