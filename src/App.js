import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.movies = movies;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ this.movies } />
      </div>
    );
  }
}

export default App;
