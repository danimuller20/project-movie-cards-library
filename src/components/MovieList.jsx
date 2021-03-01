// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

// 5 - Passe uma key para cada <MovieCard /> renderizado
// <MovieList /> deve renderizar <MovieCard />s de forma dinâmica. Ou seja, deve utilizar a função map para renderizar uma lista. Cada componente <MovieCard /> deve receber uma prop key com o nome do filme.

// O que será verificado:

// Passe uma key para cada <MovieCard /> renderizado.

// 4- Renderize componentes <MovieCard /> dentro de <MovieList />

// <MovieList /> deve renderizar um componente <MovieCard /> para cada objeto contido no array
//  recebido na prop movies.

// O que será verificado:

// Renderize componentes <MovieCard /> dentro de MovieList.

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (<div>
      {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)};
    </div>)
  }
}

export default MovieList;
