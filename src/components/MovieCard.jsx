// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt='Capa do jogo'/>;
        <h4>{ title }</h4>;
        <h5>{ subtitle }</h5>;
        <p>{ storyline }</p>;
        <Rating rating={ rating } />;
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
};

export default MovieCard;
