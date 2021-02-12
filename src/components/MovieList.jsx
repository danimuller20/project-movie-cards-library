import { Component } from 'react';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return movies;
  }
};

export default MovieList;
