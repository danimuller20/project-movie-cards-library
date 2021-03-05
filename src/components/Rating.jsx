import React from 'react';
// implement Rating component here
// import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    //    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

export default Rating;
