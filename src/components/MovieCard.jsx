// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>{this.props.movie.title}</div>
    );
  }
}

export default MovieCard;