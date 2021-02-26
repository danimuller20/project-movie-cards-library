import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList key={ data } />
        <Rating />
      </div>
    );
  }
}

export default App;
