import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import movies from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

App.propTypes = {
  movies: PropTypes.array,
}

export default App;
