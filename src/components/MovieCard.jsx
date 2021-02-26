import React from 'react';
// import data from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <span>{ rating }</span>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

export default MovieCard;
