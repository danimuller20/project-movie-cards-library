import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rating = this.props;
    return <spam>{ rating }</spam>;
  }
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
