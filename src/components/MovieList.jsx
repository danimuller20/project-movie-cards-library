import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movieItem) => {
            const { title } = movieItem;
            return <MovieCard movie={ movieItem } key={ title } />;
          })
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.any,
};

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//   })),
// };
export default MovieList;
