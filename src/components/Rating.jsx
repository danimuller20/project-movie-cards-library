import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div className='movie-card-rating'>
        <p className='rating'>{this.props.rating}</p>
      </div>
    );
  }
}

export default Rating;
