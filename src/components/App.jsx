import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MovieList />
      </main>
    );
  }
}

export default App;
