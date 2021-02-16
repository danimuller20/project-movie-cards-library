// implement MovieList component here
import React from 'react';
import Movies from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  // const { data } = this.props.data;
  render() {
    return (
      <div>
        {data.map((movie, index) => 
        <Movies movieInfo={ movie } key={ index } />)}
      </div>
    );
  }
}

export default MovieList;
