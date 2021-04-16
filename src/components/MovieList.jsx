// implement MovieList component here
import React from 'react';

class MovieListRend extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((Film) => <MovieCard />)}
      </div>
    );
  }
}

export default MovieListRend;
