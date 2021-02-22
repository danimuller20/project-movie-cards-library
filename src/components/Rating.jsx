import React from 'react';

class Rating extends React.Component {
  render() {
    rating = this.props;
    movieRating = `<div>Rating: ${rating}<div/>`;
    return movieRating;
  }
}
export default Rating;
