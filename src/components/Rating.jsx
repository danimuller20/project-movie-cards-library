// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return <p>Rating <span className="rating">{this.props.rating}</span></p>
  }
}

export default Rating;
