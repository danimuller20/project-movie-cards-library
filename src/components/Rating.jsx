// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className='rating'>
        <span className='movie-card-rating'>{ rating }</span>
      </div>
    );
  }
}

export default Rating;
