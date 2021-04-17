// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class RatingRend extends  React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{ rating }</p>
    );
  }
}

RatingRend.propType = {
  rating: PropTypes.number.isRequired,
};

export default RatingRend;
