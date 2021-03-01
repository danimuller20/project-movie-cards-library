import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt={ title }/>
        <div>
          <h4 className="title">{ title }</h4>
          <h5 className="subtitle">{ subtitle }</h5>
          <p className="storyline">{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}
// solução para atribuição de adereços: 
// https://www.javaer101.com/pt/article/35288026.html
MovieCard.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
