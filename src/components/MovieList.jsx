import React from 'react';

class MovieList extends React.Component {
  render() {
    const moviesArray = this.props;
    const moviesListToRender = moviesArray.movies.map((movie) => `<li>${movie.title}</li>`);
    return moviesListToRender;
  }
}
export default MovieList;
