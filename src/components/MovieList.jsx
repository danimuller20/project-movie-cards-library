import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
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
      title: 'Titulo',
      subtitle: 'Subtitulo',
      storyline: 'Sinopse',
      rating: 'Nota',
      imagePath: 'Imagem',
    },
  ],
};

// Para os requisitos onde se era exigido proptype e propdefault,
// consultei o repositório da colega Raquel Picanço para me ajudar
// a visualizar o resultado e abstração

export default MovieList;
