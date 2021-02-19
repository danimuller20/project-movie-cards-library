import React from 'react';
import Proptypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <h6>{ rating }</h6>
      </div>
    );
  }
}

Rating.proptype = {
  rating: Proptypes.number.isRequired,
};

export default Rating;
