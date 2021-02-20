// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

const { title, subtitle, storyline, rating, imagePath } = this.props.movieInfo;

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <section>
          <img src={ imagePath } alt="broken" />
          <p>{ title }</p>
          <p>{ subtitle }</p>
          <p>{ storyline }</p>
          <p>{ rating }</p>
        </section>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  title: 'teste',
  subtitle: 'teste',
  storyline: 'teste',
  rating: 0,
  imagePath: 'teste',
};

export default MovieCard;
