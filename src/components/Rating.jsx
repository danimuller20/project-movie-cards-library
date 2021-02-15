// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { movieRate } = this.props;
    return (
      <span>{ movieRate }</span>
    );
  }
}

Rating.propTypes = {
  movieRate: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default Rating;
