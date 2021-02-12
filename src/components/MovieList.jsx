import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map(element => <p>{element.title}</p> )}
      </div>
    );
  }
}

export default MovieList;
