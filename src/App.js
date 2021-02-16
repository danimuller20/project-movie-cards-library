import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.movies = [];
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
