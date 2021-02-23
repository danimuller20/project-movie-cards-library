import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
      return (
        <div>
        <div>
          <img src={ imagePath } alt={ `${ title }` } />
          </div>
          <div>
            <h4>Title: {title} </h4>
            <h5>Subtitle: {subtitle} </h5>
            <p>Sinopse: {storyline} </p>
            <Rating rating={ rating } />
          </div>
        </div>
      );
  }
}

export default MovieCard;
