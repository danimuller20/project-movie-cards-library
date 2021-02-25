import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main className="movie-list">
        {movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />
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

// Para os requisitos usando prop-types e defaultProps, consultei o repositório da colega Raquel Picanço
// Para me guiar a respeito da sintaxe e o onde, quando usar o prop-type.

export default MovieList;
