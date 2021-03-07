import React from 'react';
import MovieCard from './MovieCard';
import styles from '../App.css';
import PropTypes from 'prop-types';

MovieList.propTypes = {
	movies: PropTypes.arrayOf().isRequired
}

export default function MovieList(props) {
  render () {
		return (
			<section className={ styles.movie-list }>
				{
					props.movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
				}
			</section>
		);
	}
}
