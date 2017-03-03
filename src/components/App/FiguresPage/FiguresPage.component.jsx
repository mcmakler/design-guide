import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { html, css } from './snippets/figures.snippet';

import './FiguresPage.scss';

export default () => (
  <Page
    title="Figures"
    className="figures-page"
    subtitle="This is what figures should look like"
  >
    <div className="container page-section" >
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { html }
          </CodeSnippet>
          <br />
          <CodeSnippet language="css">
            { css }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox className="center">
            <figure>
              <img
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <figcaption>
                <h4>Placeholder</h4>
                <p>This is my placeholder, son.</p>
              </figcaption>
            </figure>
          </PreviewBox>
          <PreviewBox className="background--grey_bg center">
            <figure>
              <img
                alt="Placeholder"
                src="http://lorempixel.com/260/230/business/"
              />
              <figcaption>
                <h4>Placeholder</h4>
                <p>This is my placeholder, son.</p>
              </figcaption>
            </figure>
          </PreviewBox>
        </div>
      </div>
    </div>
  </Page>);
