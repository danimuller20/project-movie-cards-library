import React from 'react';

class Rating extends React.Component {
  render() {
    const rating = this.props;
    const movieRating = `<div>Rating: ${rating}<div/>`;
    return movieRating;
  }
}
export default Rating;
