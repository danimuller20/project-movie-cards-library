// implement MovieList component here
import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';
import data from '../data';

export default class MovieList extends React.Component {
  render() {
    return (
      <div>
        {data.map((movie) => <MovieCard movieInfo={ movie } key={ movie.title } />)}
      </div>
    );
  }
}
