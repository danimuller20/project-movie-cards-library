// implement Rating component here
import { createElement, Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return createElement('div', { className: 'rating' }, rating);
  }
}

export default Rating;
