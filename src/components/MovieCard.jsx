// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from '/Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <div>
          <h4>{ title }</h4>
          <img src={ imagePath } alt= { title }/>
        </div>  
      </div>
    );
  }
}

export default MovieCard;