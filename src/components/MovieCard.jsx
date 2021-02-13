import React from 'react';

class MovieCard extends React.Component {
  render(){
    return (
      <div>
        <div>
          <img src={this.props.movie.imagePath}/>
        </div>
        <div>
          <h4>{this.props.movie.title}</h4>
          <h5>{this.props.movie.subtitle}</h5>
          <p>{this.props.movie.storyline}</p>
        </div>
      </div>
    )
  }
}

export default MovieCard;
