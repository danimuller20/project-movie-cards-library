import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const movie = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <p> Movie Card</p>
        <img src={ imagePath } alt="Imagem do filme" />
        <h4>
          { title }
        </h4>
        <h5>
          { subtitle }
        </h5>
        <Rating />
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
};

export default MovieCard;
