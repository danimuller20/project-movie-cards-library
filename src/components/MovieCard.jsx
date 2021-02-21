import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { /* title, subtitle, storyline,  */imagePath/* , rating */ } = movie;
    return (
      <div>
        <img src={ imagePath } />
        <p><Rating /></p>
      </div>
    );
  }
}

export default MovieCard;
