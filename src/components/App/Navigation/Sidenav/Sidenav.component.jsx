import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidenav.scss';

export default class Sidenav extends Component {
  renderMenuItems() {
    return this.props.menuItems && this.props.menuItems.map(item =>
      <li key={item.id} >
        <NavLink activeClassName="active" to={item.path} >
          {item.label}
        </NavLink>
      </li>,
    );
  }

  render() {
    return (
      <nav className={`sidenav ${this.props.active ? 'active' : ''}`} >
        <header className="sidenav__header" >
          <img alt="Logo" src="assets/logo.svg" />
        </header>
        <ul>
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}

Sidenav.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  active: React.PropTypes.bool.isRequired,
};
