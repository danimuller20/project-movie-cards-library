import React from 'react';

class MovieList extends React.Component {
  render(moviesArray) {
    const movies = moviesArray.map((movie) => `<li>${movie}<li>`);
    return movies;
  }
}
export default MovieList;
