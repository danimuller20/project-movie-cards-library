// implement Rating component here
import React from 'react';
import { number } from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <h3>{ rating }</h3>
    );
  }
}

Rating.propTypes = {
  rating: number,
};

Rating.defaultProps = {
  rating: '?',
};

export default Rating;
