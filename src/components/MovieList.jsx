import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map(item => <MovieCard movie={ item } key={ item.title }/>)};
      </div>
    )
  }
}

export default MovieList;
