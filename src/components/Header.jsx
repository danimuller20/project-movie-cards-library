// import { Component } from 'react';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          {this.props.text}
        </h1>
      </header>
    )
  }
}

export default Header;
