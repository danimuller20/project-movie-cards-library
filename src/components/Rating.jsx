import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        <header>Rating:</header>
        { rating }
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
