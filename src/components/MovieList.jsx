import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
    this.props.movies.map(item => < MovieCard key = {item.title} movie = {item}/>)
    );
  }
}

export default MovieList;
