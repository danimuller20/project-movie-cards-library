import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { subtitle, storyline, rating, imagePath } = this.props.movie;
    const title = this.props.movie.title;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
