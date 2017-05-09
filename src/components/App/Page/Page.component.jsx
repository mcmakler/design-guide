import React from 'react';

import './Page.scss';

const PageComponent = props => (
  <div>
    <div className="page-header">
      <h1>{props.title}</h1>
      <hr className="page-header__separator" />
      <h3>{props.subtitle}</h3>
    </div>
    <main className={props.className}>
      {props.children}
    </main>
  </div>
);

PageComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

PageComponent.defaultProps = {
  subtitle: '',
  className: '',
  children: <div>hola mundo</div>,
};

export default PageComponent;
