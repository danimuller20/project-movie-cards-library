import React, { Component } from 'react'
import movies from '../data'
import MovieCard from './MovieCard'

class MovieList extends Component {
  render() {
    // const cards = movies.map((movie, index) => {
    //   return(
    //       <MovieCard key={index} movie={movie}/>
    //   )
    // })

    return(
      <div>
        {
          movies.map((movie, index) => {
            return(
                <MovieCard key={`Movie Title ${index + 1}`} movie={movie}/>
            )
          })
        }
      </div>
    )
  }
}

export default MovieList