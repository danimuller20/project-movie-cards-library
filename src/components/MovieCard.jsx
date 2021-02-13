import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div>
          <img src={ movie.imagePath } alt='Capa do Filme'/>
        </div>
        <div>
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
        </div>
      </div>
    )
  }
}

export default MovieCard;
