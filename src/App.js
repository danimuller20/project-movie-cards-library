import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const movie = {
  title: 'a',
  subtitle: 'a',
  storyLine: 'a',
  imagePath: 'a,',
};
function App() {
  return (
    <main>
      <Header />
      <MovieList movies={ movie } />
    </main>
  );
}

export default App;
