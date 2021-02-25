import React, { Component } from 'react';
import propTypes from 'prop-types';
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
  movies: propTypes.arrayOf(PropTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'TitleMovie',
      subtitle: 'TitleMovie',
      storyline: 'MovieStoryLine',
    },
  ],
};
export default MovieList;

// Para os requisitos onde foi necessário o proptype e o defaultProps, consultei o repositório da colega
// Raquel Picanço e consultei a estrutura utilizada.
