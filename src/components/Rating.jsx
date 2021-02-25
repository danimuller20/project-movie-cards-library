import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <div>
    <h1 className="rating">{rating}</h1>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
