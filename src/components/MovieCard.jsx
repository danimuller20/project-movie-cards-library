import React from 'react';
import PropTypes from 'prop-types';

class MovierCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <div>
          <img src={ imagePath } alt={ title } />
        </div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

MovierCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired };

export default MovierCard;
