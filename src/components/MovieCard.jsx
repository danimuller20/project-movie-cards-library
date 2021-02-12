// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
import movies from '../data'

class MovieCard extends Component {
  render() {
    // const { rating } = this.props.movies
    return (
      <div>
        <img src={ this.props.movies.imagePath }/> 
        <h4>{this.props.movies.title}</h4> 
        <h5>{this.props.movies.subtitle}</h5>
        <p>{ this.props.movies.storyline }</p>
        <Rating rating={this.props.movies.rating}/>
      </div>
    )
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string
}

export default MovieCard
