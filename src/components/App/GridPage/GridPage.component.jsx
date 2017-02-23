import React, { Component } from 'react';

import Page from '../Page/Page.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import './GridPage.scss';

import template from './snippets/grid.html';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Grid' };
  }

  render() {
    return (
      <Page title={this.state.title} >
        <section className="container page-section" >
          <h2>Grid Explained</h2>
          <div className="grid-page__sample-grid container grid" >
            {Array.from(new Array(12).keys()).map(() => (
              <div className="grid-page__sample-column column" />
            ))}
          </div>
          <CodeSnippet>
            { template }
          </CodeSnippet>
        </section>
      </Page>
    );
  }
}
