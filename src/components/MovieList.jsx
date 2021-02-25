import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    this.props.movie.map((movie, index) => <MovieCard key={ index } movie={ movie } />);
    return (
      <div>
        <ul>
          <li>{ movie }</li>
        </ul>
      </div>
    );
  }
}

export default MovieList;
