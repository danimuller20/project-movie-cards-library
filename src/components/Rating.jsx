// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rate } = this.props.rating;
    return (
      <p>
        Rating
        <span className='rating'>{rate}</span>
      </p>
    );
  }
}

Rating.proptypes = { rate: PropTypes.number };

export default Rating;
