import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map(({ title }) => (
          <MovieCard key={ title } />
        ))}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'Movie Title',
      subtitle: 'Movie Title',
      storyline: 'Movie Storyline',
      rating: 'Movie rating',
      imagePath: 'File path to Movie banner',
    },
  ],
};

export default MovieList;
