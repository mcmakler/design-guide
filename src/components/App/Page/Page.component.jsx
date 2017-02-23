import React from 'react';

import Header from './Header/Header.component';

import './Page.scss';

const PageComponent = props => (
  <div>
    <Header>{props.title}</Header>
    <main>
      {props.children}
    </main>
  </div>
);

PageComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.string,
};

PageComponent.defaultProps = {
  children: 'Hola Mundo',
};

export default PageComponent;
