// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;  
    const { title, subtitle, storyLine, rating, imagePath } = movie;
    return (
      <div>
        <p>
          { title }
        </p>
        <p>
          { subtitle }
        </p>
        <p>
          { storyLine }
        </p>
        <img src={ imagePath } alt="texto" />
        <div>
          <p>
            { rating }
          </p>
        </div>
      </div>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyLine: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.string
  }).isRequired,
}

export default MovieCard;
