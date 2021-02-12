// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className='rating'>
        <span>{rating}</span>
      </div>
    )
  }
}

export default Rating;