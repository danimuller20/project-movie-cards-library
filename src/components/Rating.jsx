// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <p className="rating">{rating}</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
};

Rating.defaultProps = {
  rating: '3',
};

export default Rating;
