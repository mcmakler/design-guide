import React from 'react';

import './PreviewBox.scss';

const PreviewBoxComponent = props => (
  <div className={`preview-box ${props.className}`}>
    {props.children}
  </div>
);

PreviewBoxComponent.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

PreviewBoxComponent.defaultProps = {
  className: '',
};

export default PreviewBoxComponent;
