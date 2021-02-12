// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    return (
      <section>
        <img src={ this.props.movie.imagePath} alt={ this.props.movie.title } />
        <h4>{ this.props.movie.title }</h4>
        <h5>{ this.props.movie.subtitle }</h5>
        <p>{ this.props.movie.storyline }</p>
      </section>
    );
  }
}

export default MovieCard;
