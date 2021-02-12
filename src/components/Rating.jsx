// implement Rating component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <p className="rating">{this.props.rating}</p>
    );
  }
}

export default MovieList;