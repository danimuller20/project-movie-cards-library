import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <div className="movie-card-rating rating">
        <span className="rating">{this.props.rating}</span>);
      </div>
    );
  }
}

Rating.prototypes = {
  rating: PropTypes.number,
};

export default Rating;
