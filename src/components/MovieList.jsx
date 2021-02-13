// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
    render () {
        return (
            <div>
                {this.props.data.map((movie, index) => <Movies movieInfo={movie} key={index} />)}
            </div>
        )
    }
}

class Movies extends React.Component {
    render () {
        const {title, subtitle, storyline, rating, imagePath} = this.props.movieInfo;
        return (
            <div>
                <section>
                    <img src={imagePath} alt="broken"></img>
                    <p>{subtitle}</p>
                    <p>{title}</p>
                    <p>{storyline}</p>
                    <p>{rating}</p>
                </section>
            </div>
        )
    }
}

export default MovieList;