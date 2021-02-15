import React from 'react';

class MovieCard extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.imagePath} alt="imagem do filme"/>
        <h4>{this.props.title}</h4>
        <h5>{this.props.subtitle}</h5>
        <p>{this.props.storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
