import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MovieList extends Component {
  render() {
    return (
      <div>
        <p></p>
        <MovieCard 
          title={this.props.movie.title} 
          subtitle={this.props.movie.subtitle} 
          imagePath={this.props.movie.imagePath} 
          storyline={this.props.movie.storyline} 
          rating={this.props.movie.rating}
        />
      </div>
    );
  }
}

export default MovieList;
