import React, { Component } from 'react';
import './Sidenav.scss';

export default class Sidenav extends Component {

  renderMenuItems() {
    return this.props.menuItems && this.props.menuItems.map(item =>
      <li>{item.label}</li>,
    );
  }

  render() {
    return (
      <nav className={`sidenav ${this.props.active ? 'active' : ''}`}>
        <img alt="Logo" src="/assets/logo/logo.svg" />
        <ul>
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}

Sidenav.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
