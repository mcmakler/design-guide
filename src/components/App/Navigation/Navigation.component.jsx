import React, { Component } from 'react';
import Burger from './Burger/Burger.component';
import Sidenav from './Sidenav/Sidenav.component';
import './Navigation.scss';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false,
    };
    this.menuItems = [
      {
        path: '/grid',
        label: 'Grid',
      },
      {
        path: '/typography',
        label: 'Typography',
      },
      {
        path: '/colors',
        label: 'Colors',
      },
    ];
  }

  toggleBurger() {
    this.setState({ burgerOpen: !this.state.burgerOpen });
  }

  render() {
    return (
      <div className="navigation">
        <a tabIndex="-1" onClick={() => this.toggleBurger()}>
          <Burger active={this.state.burgerOpen} />
        </a>
        <Sidenav active={this.state.burgerOpen} menuItems={this.menuItems} />
      </div>
    );
  }
}
