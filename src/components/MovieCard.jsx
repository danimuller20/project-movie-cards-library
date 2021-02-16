// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
    render() {
        const {title, subtitle, storyLine, rating, imagePath} = this.props.cards
return (
    <div>
        <p> { title } </p>
        <p> { subtitle } </p>
        <p> { storyLine } </p>
        <img src= { imagePath } />
        <div>
            <p> { rating } </p>
        </div>
    </div>
)
    }

};

export default MovieCard;

