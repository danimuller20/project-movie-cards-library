// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movies;
    return (
      <div className='movie-card'>
        <img className='movie-card-image' alt='cartão da biblioteca' src={ imagePath } />
        <div>
          <h4 className='movie-card-title'>{title}</h4>
          <h5 className='movie-card-sub'>{subtitle}</h5>
          <p className='movie-card-storyline'>{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </div>)
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};


export default MovieCard;
