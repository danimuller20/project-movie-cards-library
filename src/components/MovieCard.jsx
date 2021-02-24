import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
      return (
        <section className='movie-card-body'>
        <div className='movie-card'>
          <img className='movie-card-image' src={ imagePath } alt={ `${ title }` } />
          </div>
          <div>
            <h4 className='movie-card-title'>Title: {title} </h4>
            <h5 className='movie-card-subtitle'>Subtitle: {subtitle} </h5>
            <p className='movie-card-storyline'>Sinopse: {storyline} </p>
            <div className='movie-card-rating'>
              <Rating rating={ rating } />
            </div>
          </div>
        </section>
      );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,


};

export default MovieCard;
