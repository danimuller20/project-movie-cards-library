import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movie={ movie } />
      </div>
    );
  }
}
export default App;
