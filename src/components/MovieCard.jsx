import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Rating from './Rating';

MovieCard.propTypes = {
	movie: {
		title: PropTypes.string,
		subtitle: PropTypes.string,
		storyline: PropTypes.string,
		imagePath: PropTypes.string,
		rating: PropTypes.number,
	}.isRequired,
}

export default function MovieCard(props) {
	render () {
		return (
			<div className={ styles.movie-card }>
				<img className={ styles.movie-card-image } src={ props.imagePath } alt={ props.title }/>
				<article className={ styles.movie-card-body }>
					<h4 className={ styles.movie-card-title }>{ props.title }</h4>
					<h5 className={ styles.movie-card-subtitle }>{ props.subtitle }</h5>
					<p className={ styles.movie-card-storyline }>{ props.storyline }</p>
				</article>
				<Rating rating={ props.rating } />
			</div>
		);
	}
}
