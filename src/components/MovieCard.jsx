import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section className="movie-card-body">
        <div className="movie-card-image">
          <img className="movie-card" src={ imagePath } alt={ `${title}` } />
        </div>
        <div>
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ movie.rating } />
        </div>
      </section>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieCard;
