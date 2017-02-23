import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.scss';

export default class Sidenav extends Component {

  constructor(props) {
    super(props);
  }

  renderMenuItems() {
    return this.props.menuItems && this.props.menuItems.map(item =>
      <li><Link to={item.path} >{item.label}</Link></li>,
    );
  }

  render() {
    return (
      <nav className={`sidenav ${this.props.active ? 'active' : ''}`} >
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
  active: React.PropTypes.bool.isRequired,
};
