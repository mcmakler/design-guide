import React from 'react';

import Page from '../Page/Page.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';

import './ButtonsPage.scss';
import * as buttons from './snippets/buttons.style';

export default () => (
  <Page
    title="Buttons"
    className="buttons-page"
    subtitle="A detailed explanation of buttons"
  >
    <div className="container" >
      <section className="page-section columns" >
        <div className="column is-half" >
          <CodeSnippet language="css" >
            {buttons.button}
          </CodeSnippet>
        </div>
        <div className="column" >
          <PreviewBox className="center" >
            <button className="button" >Base Button</button>
          </PreviewBox>
        </div>
      </section>
      <section className="page-section columns" >
        <div className="column is-half" >
          <CodeSnippet language="css" >
            {buttons.buttonColors}
          </CodeSnippet>
        </div>
        <div className="column" >
          <PreviewBox>
            <div className="columns">
              <button className="button button__primary column" >Primary</button>
              <button className="button button__secondary column" >Secondary</button>
            </div>
            <br/>
            <div className="columns">
              <button className="button button__positive column" >Positive</button>
              <button className="button button__warn column" >Warn</button>
            </div>
          </PreviewBox>
        </div>
      </section>
      <section className="page-section columns" >
        <div className="column is-half" >
          <CodeSnippet language="css" >
            {buttons.buttonLarge}
          </CodeSnippet>
        </div>
        <div className="column" >
          <PreviewBox className="center" >
            <button className="button button__large button__primary" >
              Very big primary button
            </button>
          </PreviewBox>
        </div>
      </section>
      <section className="page-section columns" >
        <div className="column is-half" >
          <CodeSnippet language="css" >
            {buttons.buttonFluid}
          </CodeSnippet>
        </div>
        <div className="column" >
          <PreviewBox className="center" >
            <button className="button button__fluid button__primary" >
              I take the size of my container
            </button>
          </PreviewBox>
        </div>
      </section>
      <section className="page-section columns" >
        <div className="column is-half" >
          <CodeSnippet language="css" >
            {buttons.buttonSecondary}
          </CodeSnippet>
        </div>
        <div className="column" >
          <PreviewBox className="center" >
            <button className="button button__secondary" >
              Secondary Button
            </button>
          </PreviewBox>
        </div>
      </section>
    </div>
  </Page>);
