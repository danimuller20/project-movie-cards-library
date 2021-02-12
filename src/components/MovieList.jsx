import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        {this.props.movies}
      </main>
    );
  }
}

export default MovieList;