import React from 'react';
import './Burger.scss';

const BurgerComponent = props => (
  <div className={`burger ${props.active ? 'active' : ''}`} >
    <div className="burger__circle" >
      <div className="burger__bars" />
    </div>
  </div>
);

BurgerComponent.propTypes = {
  active: React.PropTypes.bool.isRequired,
};

export default BurgerComponent;
