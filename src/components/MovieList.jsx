// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
    render() {
        return (
            <div>
               <MovieCard movies={movies}/>
               
            </div>
        )
    }
}

export default MovieList;