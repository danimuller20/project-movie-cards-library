import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';
import MovieCard from './components/MovieCard';

function App() {
  const movieObject = { title, subtitle, storyline, imagePath, rating };
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
      <MovieCard movie={ movieObject }/>
    </div>
  );
}

export default App;
