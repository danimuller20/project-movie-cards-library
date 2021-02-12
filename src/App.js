import React from 'react';
import './App.css';

import data from '../src/data';

import Header from './components/Header';
import MovieList from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={data[0]} />
    </div>
  );
}

export default App;
