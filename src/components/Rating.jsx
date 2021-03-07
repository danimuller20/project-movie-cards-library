import React from 'react';
import PropTypes from 'prop-types';

export default function Rating(props) {
  const { rating } = props;
  return (
    <article className="movie-card-rating">
      <div className="rating">{ rating }</div>
    </article>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
