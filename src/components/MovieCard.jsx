import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath} alt="Banner do filme"/>
        <div className='movie-info'>
          <h2>{this.props.movie.title}</h2>
          <h3>{this.props.movie.subtitle}</h3>
          <p>{this.props.movie.storyline}</p>
        </div>
        <div>{this.props.movie.rating}</div>
      </div>
    );
  }
}

export default MovieCard