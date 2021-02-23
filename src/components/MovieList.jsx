import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  cardRender(movies) {
    movies.map(() => MovieCard);
  }

  render() {
    return (
      <span>
        {this.cardRender(this.props)}
      </span>
    );
  }
}
MovieList.PropType = {
  movies: PropTypes.array,
};

export default MovieList;
