import React from 'react';
import PropTypes from 'prop-types';


class Rating extends React.Component {
  render() {
     return (
        <div className="rating">
            { this.props.rating }
        </div>
    )
  }
}

Rating.propType = {
  rating: PropTypes.object,
  }

export default Rating
