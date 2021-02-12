import React from 'react';
import MovieList from './components/MovieList';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieList movies={data} />
    </div>
  );
}

export default App;
