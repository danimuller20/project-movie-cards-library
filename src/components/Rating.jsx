import React from 'react';
import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';
// import data from '../data';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};
