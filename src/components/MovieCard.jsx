// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
      const { title, subtitle, storyline, imagePath, rating} = this.props.movie
    return (
      <section className='movie-card'>
        <h1>Movie Cards</h1>
        <h2>{title}</h2>
        <img src={imagePath} alt="Imagem do Filme"/>

      </section>
    );
  }
}

export default MovieCard;
