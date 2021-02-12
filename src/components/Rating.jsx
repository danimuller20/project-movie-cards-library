import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (<p className="rating">{this.props.rating}</p>);
  }
}
 
Rating.prototypes = {
  rating: PropTypes.number,
};

export default Rating;
