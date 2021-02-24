// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
    })
  ),
};

MovieList.defaultProps = {
  movies: ({
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    imagePath: 'images/movie_1',
  }),
};

export default MovieList;
