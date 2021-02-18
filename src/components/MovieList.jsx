import React from 'react'

class MovieList extends React.Component {
  render() {
    return(
      <div>
        movies = [
          {
            this.props.movies.title,
            this.props.movies.subtitle,
            this.props.movies.storyline
          },
        ];
      </div> 
    )
  }
}

export default MovieList
