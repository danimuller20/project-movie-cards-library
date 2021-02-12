// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
class MovieCard extends React.Component {
  render() {

    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div className="movie-card">
        <img src={ imagePath } alt=""></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

export default MovieCard;
