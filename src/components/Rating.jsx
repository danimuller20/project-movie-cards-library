// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rate } = this.props.rating;
    return (
      <p>Rating
        <span className='rating'>{rate}</span>
      </p>
    );
  }
}

export default Rating;
