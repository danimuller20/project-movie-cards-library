import React from 'react';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { card } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = card;
    return (
      <div>
        <img src={ imagePath } alt="movie cards" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        {/* <Rating rating={ rating } /> */}
      </div>
    );
  }
}

export default MovieCard;
