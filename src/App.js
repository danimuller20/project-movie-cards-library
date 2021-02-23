import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  console.log(movies);
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
