import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = props;
    return <div>{movies}</div>;
  }
}

MovieList.prototype = {
  movies: PropTypes.array,
};

export default MovieList;
