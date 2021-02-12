// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const indexMovie = {
      title:this.props.movie.title,
      subtitle: this.props.movie.subtitle,
      storyline: this.props.movie.storyline,
      imagePath: this.props.movie.imagePath,
      rating: this.props.movie.rating,
    };

    return (
      <section>
        <img src={ indexMovie.imagePath } alt={ indexMovie.title } />
        <h4>{ indexMovie.title }</h4>
        <h5>{ indexMovie.subtitle }</h5>
        <p>{ indexMovie.storyline }</p>
      </section>
    );
  }
}

export default MovieCard;
