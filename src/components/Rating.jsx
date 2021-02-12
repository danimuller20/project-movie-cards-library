// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return <h6 className="rating">{this.props.rating}</h6>
  }
}

export default Rating;
