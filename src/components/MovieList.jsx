import React, { Component } from 'react'
class MovieList extends Component{
    render(){
        return(
            <main>
                {this.props.movies.forEach((movie) => <MovieCard movie={movie} />)}
            </main>
        );
    }
}

export default MovieList
