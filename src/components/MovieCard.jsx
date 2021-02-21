import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = movie;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

MovieCard.defaultProps = {
  movie: 'Filme não definido',
  title: 'Sem título definido',
  subtitle: 'Subtítulo não definido',
  imagePath: 'Caminho da imagem não definido',
  storyline: 'Sinopse não definida',
  rating: PropTypes.number,
};

export default MovieCard;
