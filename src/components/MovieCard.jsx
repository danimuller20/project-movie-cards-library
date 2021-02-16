// // implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const movieInfo = this.props.movie;
    return (
      <div>
        <img src={movieInfo.imagePath} alt="image renderizada"/>
        <h4>{movieInfo.title}</h4>
        <h5>{movieInfo.subtitle}</h5>
        <p>{movieInfo.storyline}</p>
        <Rating rating={ movieInfo.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
