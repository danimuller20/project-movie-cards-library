import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={ movies[0] } key="1" />
      <MovieList movie={ movies[1] } key="2" />
      <MovieList movie={ movies[2] } key="3" />
      <MovieList movie={ movies[3] } key="4" />
      <MovieList movie={ movies[4] } key="5" />
    </div>
  );
}

export default App;
