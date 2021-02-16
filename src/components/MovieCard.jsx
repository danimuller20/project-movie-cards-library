// implement MovieCard component here
import React from 'react';
// import PropTypes from 'prop-types'

class Movies extends React.Component {
  render () {
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
    )
  }
}

// Movies.PropTypes = {
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.string,
//     imagePath: PropTypes.string,
// };

export default Movies;
