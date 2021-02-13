import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard />
      <MovieList />
    </div>
  );
}

export default App;
