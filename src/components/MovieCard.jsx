// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <section className="movie-card">
        <h1>Movie Cards</h1>
        <h2>{ title }</h2>
        <img src={ imagePath } alt={ title } />
        <h3>{ subtitle }</h3>
        <h4>{ storyline }</h4>
        <h5>{ rating }</h5>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
