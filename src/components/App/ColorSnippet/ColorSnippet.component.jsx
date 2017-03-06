import React from 'react';

import './ColorSnippet.scss';

const ColorSnippet = props => (
  <div className={`color-snippet columns ${props.className}`} >
    <div
      className={`color-snippet__color-panel column ${props.border ? 'color-snippet__color-panel_border' : ''}`}
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      {props.color}
    </div>
    <div className="color-snippet__content column" >
      {props.children}
    </div>
  </div>
);

ColorSnippet.propTypes = {
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  textColor: React.PropTypes.string,
  children: React.PropTypes.string,
  border: React.PropTypes.bool,
};

ColorSnippet.defaultProps = {
  className: '',
  color: 'black',
  textColor: 'white',
  children: '',
  border: false,
};

export default ColorSnippet;
