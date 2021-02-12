// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// import movies from '../data';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movies
    return (
      <div>
        <img src={ imagePath }/> 
        <h4>{title }</h4> 
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={rating}/>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};

export default MovieCard;
