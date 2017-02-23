import React from 'react';

import './Header.scss';

const Header = props => (
  <div className="header">
    <h2>{props.children}</h2>
  </div>
);

Header.propTypes = {
  children: React.PropTypes.string,
};

Header.defaultProps = {
  children: 'Header',
};

export default Header;
