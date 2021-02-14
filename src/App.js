import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import infoCards from './data';

function App() {
  return (
    <div className="App">
      <Header mainTitle="Movie Cards" />
      <MovieList movie={infoCards} />
    </div>
  );
}

export default App;
