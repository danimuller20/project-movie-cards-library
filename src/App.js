import React from 'react';
import Header from './components/Header';
import Movielist from './components/MovieList';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielist movies={ movies } />
    </div>
  );
}

export default App;
