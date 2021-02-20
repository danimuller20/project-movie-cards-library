import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movies;

    return (
      <div>
        <img src={imagePath} alt=""/>
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
      </div>
    )
  }
}

export default MovieCard;
