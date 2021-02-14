import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <div className="movie-list movie-card-body">
        <div className="movie-card hvr-underline-reveal hvr-grow">
          <div className="movie-card-title">
            <img className="movie-card-image" src={ imagePath } alt={ title } />
          </div>
          <h4 className="page-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <span className="movie-card-rating">
            Rating:
            <Rating rating={ rating } />
          </span>
        </div>
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

export default MovieCard;
