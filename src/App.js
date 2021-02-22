import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data'

function App() {
  return (
    <div className="App">
      { <MovieList movies={}/> }
    </div>
  );
}

export default App;
