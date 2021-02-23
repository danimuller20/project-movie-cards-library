// implement MovieCard component here
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movieInfo;
    return (
      <section>
        <img src={ imagePath } className="movie-card-image" alt="broken" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <section>{ rating }</section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movieInfo: {},
};
