import React from 'react';

import './Page.scss';

const PageComponent = props => (
  <div>
    <div className="header">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </div>
    <main>
      {props.children}
    </main>
  </div>
);

PageComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.node,
};

PageComponent.defaultProps = {
  subtitle: '',
  children: <div>hola mundo</div>,
};

export default PageComponent;
