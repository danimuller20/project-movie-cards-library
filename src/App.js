import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

MovieList.propType = {
  movies: PropTypes.object.isRequired,
}

export default App;
