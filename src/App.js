import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const obj = {};
  return (
    <div className="App">
      <Header />
      <MovieList movies={ obj } />
    </div>
  );
}

export default App;
