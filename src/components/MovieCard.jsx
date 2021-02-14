import React from 'react'
import MovieList from './MovieList'
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render(){
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return(
      <div className=".movie-card-body">
        <div className="movie-card">
          <div className=".movie-card-image">
            <img src={ imagePath } alt={ title }/>
            <h4>{ title }</h4>
            <h5>{ subtitle }</h5>
            <p>{ storyline }</p>
          </div>
        </div>
      </div>
    )
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      //rating: PropTypes.number,
      imagePath: PropTypes.string,
    }).isRequired,
  };
  
  export default MovieCard;