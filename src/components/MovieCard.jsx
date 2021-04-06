// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
    render() {
        return (
            <div>
                { this.props.movies.map((movie) => <img src={movie.imagePath} alt={movie.title}/> )}

            </div>
        )
    }
}

export default MovieCard;