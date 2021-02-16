// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    // const { data } = this.props.data;
    return (
      <div>
        {data.map((movie, index) => <MovieCard movieInfo={ movie } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
