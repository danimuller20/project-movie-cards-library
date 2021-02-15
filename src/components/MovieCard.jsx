import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline } = this.props.Data;

    return (
      <div>
        <img src={ imagePath } alt="imagem do filme" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

Greeting.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
};

export default MovieCard;
