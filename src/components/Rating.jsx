// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {

  static defaultProps = {
    rating: 0,
  };

  render() {
    const { rating } = this.props.rating;
    return <p className="rating">{ rating }</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
