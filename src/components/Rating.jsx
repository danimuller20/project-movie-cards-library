import React from 'react';
import { number } from 'prop-types';

class Rating extends React.Component {
  // static propTypes = {
  //   rating: number.isRequired,
  // }
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <div className="rating">{ rating }</div>
    );
  }
}

Rating.propTypes = {
  rating: number.isRequired,
};

export default Rating;
