import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesCard = movies.map((movie) =>  (<MovieCard key={ movie.title } movie={ movie }/>));

    return (
      <div>
        { moviesCard }
      </div>
    );
  }
}

export default MovieList;
