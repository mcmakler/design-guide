import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidenav.scss';
import '../../../../assets/logo.svg';

export default class Sidenav extends Component {
  renderMenuItems() {
    return this.props.menuItems && this.props.menuItems.map(item =>
      <li key={item.id} >
        <NavLink
          className="link"
          activeClassName="link_active"
          to={item.path}
        >
          {/* stupid html is stupid - href attr required to make anchor interactive */}
          <a
            href=""
            onClick={() => this.props.menuItemClick()}
          >
            {item.label}
          </a>
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
  menuItemClick: React.PropTypes.func.isRequired,
};
