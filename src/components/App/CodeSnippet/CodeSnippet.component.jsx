import React from 'react';
import Highlight from 'react-highlight';

import './CodeSnippet.scss';

const CodeSnippet = props => (
  <Highlight className={`code-snippet ${props.language}`}>
    {props.children}
  </Highlight>
);

CodeSnippet.propTypes = {
  children: React.PropTypes.string.isRequired,
  language: React.PropTypes.string,
};

CodeSnippet.defaultProps = {
  language: 'html',
};

export default CodeSnippet;
