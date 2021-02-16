// implement MovieCard component here
import React from 'react';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movieInfo;
    return (
      <div>
        <section>
          <img src={ imagePath } alt="broken" />
          <p>{subtitle}</p>
          <p>{title}</p>
          <p>{storyline}</p>
          <p>{rating}</p>
        </section>
      </div>
    );
  }
}

// MovieCard.defaultProps = {
//   title: "Enya",
//   subtitle: "Enya",
//   storyline: "Enya",
//   rating: 5,
//   imagePath: "images/Final_Fantasy_Spirits_Within.jpg",
// };

export default MovieCard;
