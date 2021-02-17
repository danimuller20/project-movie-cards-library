import React from 'react';
import Header from  "./components/Header";
import MovieCard from  "./components/MovieCard";
import data from "./data";
import './App.css'      ;

function App() {
  return (
    <div>
      <Header />
      <MovieCard movie={data[0]} />
    </div>
  );
}

export default App;
