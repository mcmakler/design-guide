import React, { Component } from 'react';
import Burger from './Burger/Burger.component';
import Sidenav from './Sidenav/Sidenav.component';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false,
    };
    this.menuItems = [
      {
        link: '/something',
        label: 'Something',
      },
      {
        link: '/something',
        label: 'Something',
      },
      {
        link: '/something',
        label: 'Something',
      },
    ];
  }

  toggleBurger() {
    this.setState({ burgerOpen: !this.state.burgerOpen });
  }

  render() {
    return (
      <div onClick={(e) => this.toggleBurger()}>
        <Burger active={this.state.burgerOpen} />
        <Sidenav active={this.state.burgerOpen} menuItems={this.menuItems} />
      </div>
    );
  }
}
