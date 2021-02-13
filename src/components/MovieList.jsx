// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => {
      return <MovieCard movie={ movie } key={ movie.title }/>
    });
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    })
  ),
}

export default MovieList;
