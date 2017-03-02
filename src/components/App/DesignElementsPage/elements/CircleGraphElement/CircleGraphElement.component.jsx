import React from 'react';

import CodeSnippet from '../../../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../../../PreviewBox/PreviewBox.component';
import { css, html } from './CircleGraphElement.snippet';

export default () => (
  <section className="page-section" >
    <header>
      <h2>Circular Graph</h2>
    </header>
    <PreviewBox className="center" >
      <div className="circle-graph">
        <svg className="circle-graph__circle">
          <circle className="circle-graph__bar-base" />
          <circle strokeDashoffset="400" className="circle-graph__bar-value" />
        </svg>
        <div className="circle-graph__content">
          <div className="circle-graph__value">52.000</div>
          <div className="circle-graph__label">Berlin</div>
        </div>
      </div>
      <div className="circle-graph">
        <svg className="circle-graph__circle">
          <circle className="circle-graph__bar-base" />
          <circle strokeDashoffset="200" className="circle-graph__bar-value" />
        </svg>
        <div className="circle-graph__content">
          <div className="circle-graph__value">24.000</div>
          <div className="circle-graph__label">Leipzig</div>
        </div>
      </div>
      <div className="circle-graph">
        <svg className="circle-graph__circle">
          <circle className="circle-graph__bar-base" />
          <circle strokeDashoffset="350" className="circle-graph__bar-value" />
        </svg>
        <div className="circle-graph__content">
          <div className="circle-graph__value">75.000</div>
          <div className="circle-graph__label">Düsseldorf</div>
        </div>
      </div>
    </PreviewBox>
    <div className="columns design-elements-page__code-block" >
      <div className="column is-one-third" >
        <header>
          <h3>CSS</h3>
        </header>
        <CodeSnippet language="css" >
          { css }
        </CodeSnippet>
      </div>
      <div className="column" >
        <header>
          <h3>HTML</h3>
        </header>
        <CodeSnippet language="html" >
          { html }
        </CodeSnippet>
      </div>
    </div>
  </section>
);
