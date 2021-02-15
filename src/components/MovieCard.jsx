import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { card } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = card;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="movie cards" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
