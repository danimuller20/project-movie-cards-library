import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { key } = this.props;
    return (
      <span>{ key }</span>
    );
  }
}

export default MovieCard;
