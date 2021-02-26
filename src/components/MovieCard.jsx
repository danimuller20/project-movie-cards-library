// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from '/Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (

    );
  }
}

export default MovieCard;