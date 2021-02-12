import React, { Component } from 'react'

class Rating extends Component{
    render(){
        return(
            <div>
                <h4>Rating</h4>
                <h5>{this.props.rating}</h5>
            </div>
        );
    }
}