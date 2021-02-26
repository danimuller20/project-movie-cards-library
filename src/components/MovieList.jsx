// implement MovieList component here
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
    render() {
        const moviesList = movies.map((movie, index) => {});
        return (
            movies.map(movie => (<div>
                <MovieList moviesList={movie} />
            </div>
        )))
    }
}

export default MovieList;
