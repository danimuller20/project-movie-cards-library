// implement Rating component here
import { createElement, Component } from 'react';

import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return createElement('div', { className: 'rating' }, rating);
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: undefined,
};

export default Rating;
