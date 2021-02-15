import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={ this.props.Data.imagePath } alt="imagem do filme"/>
        <h4>{ this.props.Data.title }</h4>
        <h5>{ this.props.Data.subtitle }</h5>
        <p>{ this.props.Data.storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
