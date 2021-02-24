import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { eachOne } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = eachOne;
    return (
      <div>
        <img src={ imagePath }/>
      </div>
    );
  }
}

export default MovieCard;
