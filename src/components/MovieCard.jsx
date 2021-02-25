import React from 'react';
import PropTypes from 'prop-types';

class MovierCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitles, storyline, rating, imagePath } = movie;
    return (
      <div>
        <p>{ title }</p>
        <p>{ subtitles }</p>
        <p>{ storyline }</p>
        <div>
          <img src={ imagePath } alt={ title } />
        </div>
        <p>{ rating }</p>
      </div>
    );
  }
}

MovierCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    subtitles: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired };

export default MovierCard;
