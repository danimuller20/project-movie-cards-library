// implement MovieList component here
import React from 'react';
import Movies from './Movies';

class MovieList extends React.Component {
    render () {
        return (
            <div>
                {this.props.data.map((movie, index) => <Movies movieInfo={movie} key={index} />)}
            </div>
        )
    }
}

export default MovieList;