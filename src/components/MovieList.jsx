import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
    render() {
        return (
            <main>
                {this.props.movies.map(movie => <MovieCard />)}
            </main>
        )
    }
}

export default MovieList;
