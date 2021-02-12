import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

// const arrayExemplo = [1,2,3,4, 5];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies= {arrayExemplo}  />
    </div>
  );
}

export default App;
