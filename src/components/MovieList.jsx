import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import { prototype } from 'enzyme-adapter-react-16';

class MovieList extends React.Component {
  render() {
      const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
    return (
      <div>
        movies = [
        {
          title,
          subtitle,
          storyline,
          rating,
          imagePath
        },
        ];
      </div>
    );
  }
}

movies.PropTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string
  })
};

export default MovieList;
