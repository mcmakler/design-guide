import React, { Component } from 'react';
import './Burger.scss';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`burger ${this.props.active ? 'active' : ''}`}>
        <div className="burger__circle" >
          <div className="burger__bars" />
        </div>
      </div>
    );
  }
}
