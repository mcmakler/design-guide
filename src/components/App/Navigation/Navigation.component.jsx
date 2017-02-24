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
        id: 1,
        path: '/grid',
        label: 'Grid',
      },
      {
        id: 2,
        path: '/typography',
        label: 'Typography',
      },
      {
        id: 3,
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
