import React, { Component } from 'react'
class MovieList extends Component{
    render(){
        return(
            <main>
                {this.props.movies.forEach((movie, index) => <MovieCard movie={movie} key={index} />)}
            </main>
        );
    }
}

export default MovieList
