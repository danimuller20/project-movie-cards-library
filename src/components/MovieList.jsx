import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>{ movies.map((eachOne) => <MovieCard key={ eachOne.title } movie={ eachOne } />) }</div>
    );
  }
}
MovieList.propTypes = {
  movies: propTypes.arrayOf.isRequired,
};

export default MovieList;
