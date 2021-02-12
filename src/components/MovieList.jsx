// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="">
        { this.props.movies.map((value) => 
            < MovieCard key={ value.title } movie={ value } />) }
      </div>
    );
  }
}

export default MovieList;
