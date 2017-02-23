import React from 'react';

import './Header.scss';

export default (props) => (
  <div className="header">
    <h1>{props.children}</h1>
  </div>
)