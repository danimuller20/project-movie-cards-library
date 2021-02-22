import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}</div>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.string,
};
Rating.defaultProps = {
  rating: '',
};
export default Rating;
