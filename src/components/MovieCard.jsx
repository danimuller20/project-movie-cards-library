import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline } } = this.props;
    return (
      <div>
        <div>
          <img src={ imagePath } alt="Capa do Filme" />
        </div>
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    imagePath: propTypes.string,
    storyline: propTypes.string,
    // rating: propTypes.number,
  }).isRequired,
};

export default MovieCard;
