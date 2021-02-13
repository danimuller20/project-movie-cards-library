// implement MovieCard component here
import MovieList from '/components/MovieList';
import React from 'react';
import movies from './data';
import Rating from './Rating';

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, imagePath, rating } = this.props.movies;
        return (
        <div>
          <div>
            {this.props.movies.map(movie => movie = {movie})}
          </div>
          <div>
          <img src={imagePath} alt={`${title} sprite`} />
          </div>
          <div>
              <h4>Title: {title} </h4>
              <h5>Subtitle: {subtitle} </h5>
              <p>Sinpose: {sinopse} </p>
          </div>
        </div>
        )
    } 
}

export default MovieCard;
