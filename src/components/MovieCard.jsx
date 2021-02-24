import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.movie.imagePath}></img>
        <h4>{ this.props.movie.title }</h4>
        <h5>{ this.props.movie.subtitle }</h5>
        <p>{ this.props.movie.storyline }</p>
        <Rating rating={ this.props.movie.rating }/>
      </section>
    );
  }
}

export default MovieCard;
