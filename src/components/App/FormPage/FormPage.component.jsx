import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { html, css } from './snippets/form.snippet';

import './FormPage.scss';

export default () => (
  <Page
    title="FormPage"
    className="form-page"
    subtitle="This is how form shall look like"
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
            <div className="FormPage__form">
              <input type="text" placeholder="Mein Vorname" />

              <textarea placeholder="Meine Nachricht" />
            </div>
          </PreviewBox>
        </div>
      </div>
      <hr />
    </div>
  </Page>);
