// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props  
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
        <section>
            <img src={ imagePath }></img>
            <div>
            <h4 className="title">{title}</h4>
            <h5 className="subtitle">{subtitle}</h5>
            <p className="storyline">{storyline}</p>
            <div className="rating">{rating}</div>
            </div>
        </section> 
    );
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imagePath: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
    }).isRequired,
};

export default MovieCard;
