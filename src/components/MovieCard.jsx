// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movieInfo;
    return (
      <div>
        <section>
          <img src={ imagePath } alt="broken" />
          <p>{subtitle}</p>
          <p>{title}</p>
          <p>{storyline}</p>
          <p>{rating}</p>
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};

export default MovieCard;
