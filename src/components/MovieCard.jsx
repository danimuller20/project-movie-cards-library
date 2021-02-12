import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title } = movie;
    return <p>{title}</p>;
  }
}

export default MovieCard;
