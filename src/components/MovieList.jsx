// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        { this.props.movies.map((movie, i) => <MovieCard key={movie} index={i} />) } 
      </section>
    );
  }
}

MovieList.PropTypes = {
  movies: PropTypes.array
};

export default MovieList;
