import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { eachOne } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = eachOne;
    return (
      <div>
        <img src={ imagePath }/>
        <h4>{ title }</h4>
      </div>
    );
  }
}

export default MovieCard;
