// texto         /*  */
import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ Data } />
      </div>
    );
  }
}

export default App;
