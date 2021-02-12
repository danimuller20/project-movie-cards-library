import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <container>
        <div>
          <img src={ imagePath } alt="imagem" />
        </div>
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
        </div>
        <div>
          <p>{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
