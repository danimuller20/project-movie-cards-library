import React from 'react'

class MovieCard extends React.Component {
  render() {
    return <img src={this.props.movie.imagePath}/>
  }
}

export default MovieCard;