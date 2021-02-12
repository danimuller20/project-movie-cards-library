import React, { Component } from 'react'

class Rating extends Component{
    render(){
        return(
            <div className='movie-card-rating'>
                <h5 className='rating'>{this.props.rating}</h5>
            </div>
        );
    }
}

export default Rating;