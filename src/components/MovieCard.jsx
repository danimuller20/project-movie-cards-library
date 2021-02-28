// import React from 'react';
import MoveList from './MovieList';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className='movie-card'>
        <img src={ imagePath } alt={ title }/>
        <div>
          <h4 className='title'>filme:{ title }</h4>
          <h5 className='subtitle'>{ subtitle }</h5>
          <p className='storyline'>{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;
