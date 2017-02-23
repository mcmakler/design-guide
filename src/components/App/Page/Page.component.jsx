import React from 'react';

import Header from './Header/Header.component';

export default (props) => (
  <div>
    <Header>{props.title}</Header>
    <main className="content"></main>
  </div>
);
