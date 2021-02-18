import React from 'react';
import PropTypes from 'prop-types'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies}
      </section>
    );
  }
}

MovieList.PropTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.number))
};



export default MovieList;
