import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;

/* Source 1: https://scrimba.com/learn/learnreact */
/* Source 2: https://tableless.com.br/guia-completo-react-ecossistema */
/* Source 3:  https://bit.dev/components , https://www.newline.co/fullstack-react/30-days-of-react/ */
/* Source 4: https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape */
/* Source 5: https://app.betrybe.com/course/front-end/react?use_case=side_bar */
