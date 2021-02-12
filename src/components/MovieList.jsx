import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div className="">
        {this.props.movies.map(movie => {
          return <MovieCard key={ movie.title } movie={ movie } />
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
