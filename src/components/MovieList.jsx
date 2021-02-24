// implement MovieList component here
import { Component } from 'react';
import MovieCard from './components/MovieCard';

class MovieList extends Component {
  render() {
    return ( data.map((filme, index) => <MovieCard cards={ filme } key={ index } />))
  }
}

export default MovieList;
