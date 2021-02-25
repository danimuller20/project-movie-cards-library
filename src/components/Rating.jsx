// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return <p className='rating'>{ this.props.rating }</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
}

Rating.defaultProps = {
  rating: '3',
}

export default Rating;
