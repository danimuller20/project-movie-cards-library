// implement MovieList component here

import React from 'react';

class MovieList extends React.Component {
    render() {
            const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
        return (
            <section>
                <img src={imagePath} alt={`${title} image`}></img>
                <div>
                    <p className="title">{title}</p>
                    <p className="subtitle">{subtitle}</p>
                    <p className="storyline">{storyline}</p>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
                </div>
            </section>
        );
    }
}

