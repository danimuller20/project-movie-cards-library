import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList'
import movies from './data.js';

function App() {
  
  
  return (
    <div className="App">
      <Header />
      <MovieList movie={ movies[0]}/>
      <MovieList movie={ movies[1]}/>
      <MovieList movie={ movies[2]}/>
      <MovieList movie={ movies[3]}/>
      <MovieList movie={ movies[4]}/>

      {/* <MovieList title={ movies[0].title } subtitle={ movies[0].subtitle } imagePath={ movies[0].imagePath } storyline={ movies[0].storyline } rating={ movies[0].rating }/>
      
      <MovieList title={ movies[1].title } subtitle={ movies[1].subtitle } imagePath={ movies[1].imagePath } storyline={ movies[1].storyline } rating={ movies[1].rating }/>
      
      <MovieList title={ movies[2].title } subtitle={ movies[2].subtitle } imagePath={ movies[2].imagePath } storyline={ movies[2].storyline } rating={ movies[2].rating }/>
      
      <MovieList title={ movies[3].title } subtitle={ movies[3].subtitle } imagePath={ movies[3].imagePath } storyline={ movies[3].storyline } rating={ movies[3].rating }/>
      
      <MovieList title={ movies[4].title } subtitle={ movies[4].subtitle } imagePath={ movies[4].imagePath } storyline={ movies[4].storyline } rating={ movies[4].rating }/> */}
    </div>
  );
}

export default App;
