import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { ratingValue } = this.props;
    return (
      <p className="rating">{ ratingValue }</p>
    );
  }
}

export default Rating;
