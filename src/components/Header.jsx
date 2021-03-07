import React from 'react';
import styles from '../App.css';

export default function Header() {
  render () {
		return (
			<header className={ styles.movie-card-header }>
				<h1 className={ styles.page-title }>Movie Cards Library</h1>
			</header>
		);
	}
}
