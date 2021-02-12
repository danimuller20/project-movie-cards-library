import React from 'react';


class MovieCard extends React.Component {
  render() {
    const {imagePath, title, subtitle, storyline} = this.props.movie;
    return(
      <container>
      <div>
        <img src={imagePath}/>
      </div>
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
      <div>
        <p>{storyline}</p>
      </div>
    </container>
    );
  }
}

export default MovieCard;