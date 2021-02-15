import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline } = this.props.Data;

    return (
      <div>
        <img src={ imagePath } alt="imagem do filme"/>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
