import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <Footer />
    </div>
  );
}

export default App;
