// implement Header component here
import { createElement, Component } from 'react';

class Header extends Component {
  render() {
    return createElement('header', null,
      createElement('h1', null, 'Movie Cards Library'));
  }
}

export default Header;
