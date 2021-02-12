import React, { Component } from 'react'

class MovieCard extends Component{
    render(){
        { title, subtitle, storyline, imagePath, rating } = this.props.movie;
        return (
            <div>
            <div>
                <img src={imagePath} alt="Movie Image" />
            </div>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
            <Rating />
            </div>
        );
    }
}