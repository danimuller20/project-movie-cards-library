import React, { Component } from 'react'
import MovieCard from './MovieCard'
class MovieList extends Component{
    render(){
        return(
            <main>
                {this.props.movies.map((movie, index) => <MovieCard movie={movie} key={index} />)}
            </main>
        );
    }
}

export default MovieList
