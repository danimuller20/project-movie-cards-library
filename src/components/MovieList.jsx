// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieListRend extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((Film) => <MovieCard />)}
      </div>
    );
  }
}

MovieListRend.propTypes = {
  movies: PropTypes.arrayOf( 
    PropTypes.shape({
      title: PropTypes.string,
    }).isRequired
  ).isRequired
};

export default MovieListRend;
