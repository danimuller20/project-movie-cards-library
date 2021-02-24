// implement MovieCard component here
import { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.cards;
    return (
      { imagePath },
      { title },
      { subtitle },
      { storyline }
    );
  }
}

export default MovieCard;
