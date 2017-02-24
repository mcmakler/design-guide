import React from 'react';

import Page from '../Page/Page.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import './GridPage.scss';

import htmlTemplate from './snippets/grid.html';
import cssTemplate from './snippets/grid.style';

const GridPageComponent = () => (
  <Page title="Grid/Margin/Padding" subtitle="Definition of the Grid, Margin and Padding">
    <section className="container page-section" >

      <header>
        <h2>Grid Explained</h2>
      </header>

      <div className="grid-page__sample-grid container columns" >
        {Array.from([1,2,3,4,5,6,7,8,9,10,11,12]).map(key => (
          <div key={key} className="grid-page__sample-column column" />
        ))}
      </div>

      <div className="grid-page__code-block container columns" >
        <div className="column">
          <header><h3>HTML</h3></header>
          <CodeSnippet language="html" >
            {htmlTemplate}
          </CodeSnippet>
        </div>
        <div className="column" >
          <header><h3>CSS</h3></header>
          <CodeSnippet language="css" >
            {cssTemplate}
          </CodeSnippet>
        </div>
      </div>

    </section>
  </Page>
);

export default GridPageComponent;
