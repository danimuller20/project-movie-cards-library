import React, { Component } from 'react';
import Header from './Header';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App
