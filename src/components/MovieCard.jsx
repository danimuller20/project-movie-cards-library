import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.imagePath}></img>
        <h4>{ this.props.title }</h4>
        <h5>{ this.props.subtitle }</h5>
        <p>{ this.props.storyline }</p>
        <Rating />
      </section>
    );
  }
}

export default MovieCard;
