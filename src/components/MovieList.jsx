// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map(currentValue => {
          return <MovieCard movie={ currentValue } key={ currentValue.title } />;
        })}
      </div>
    );
  }
}

export default MovieList;
