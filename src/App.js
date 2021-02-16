import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';

function App() {
  const movies = [];
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
