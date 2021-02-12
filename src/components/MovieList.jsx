import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'

class MovieList extends React.Component {
  render() {
    return this.props.movies.map(movie => {
      return <MovieCard movie={movie} key={movie.title}/>;
    });
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string
    })
  )
};

export default MovieList;