// implement Header component here
import { createElement, Component } from 'react';

class Header extends Component {
  render() {
    return createElement('header', { className: 'movie-card-header' },
      createElement('h1', { className: 'page-title' }, 'Movie Cards Library'));
  }
}

export default Header;
