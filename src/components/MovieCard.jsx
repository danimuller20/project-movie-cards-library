import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovierCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card">
        <div>
          <img src={ imagePath } alt={ title } className="movie-card-image" />
        </div>
        <div className="card-titles">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
        </div>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovierCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired };

export default MovierCard;
