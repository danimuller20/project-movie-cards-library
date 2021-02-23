import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movies;

    return (
      <div>
        <img src={ imagePath } />
        <h4>{ title }</h4>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
      </div>
    )
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
}

export default MovieCard;
