import React from 'react';
import data from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <h2>{ title }</h2>
        <h3>{ subtitle }</h3>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={ imagePath } alt="Movie Image" />
      </section>
    )
  }
}

export default MovieCard;
