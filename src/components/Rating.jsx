import React from React;

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p>{ rating }</p>          
      </div>
    );
  }
}

export default Rating;
