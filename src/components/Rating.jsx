import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
// import MovieCard from './MovieCard';
// import data from '../data';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <h6 className="rating">{ rating }</h6>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}.isRequired;
