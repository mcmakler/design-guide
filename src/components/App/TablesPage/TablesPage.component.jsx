import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { html, css } from './snippets/tables.snippet';

import './TablesPage.scss';

export default () => (
  <Page
    title="Tables"
    className="tables-page"
    subtitle="This is what tables should look like"
  >
    <div className="container page-section" >
      <header>
        <h2>Basic Tables</h2>
      </header>
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
            <table>
              <thead>
                <tr>
                  <td>Jahr</td>
                  <td>Preis</td>
                  <td>Fläche</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2016</td>
                  <td>50.000 &euro;</td>
                  <td>92m</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>50.000 &euro;</td>
                  <td>92m</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>50.000 &euro;</td>
                  <td>92m</td>
                </tr>
              </tbody>
            </table>
          </PreviewBox>
          <PreviewBox className="background--grey_bg center">
            <table>
              <thead>
                <tr>
                  <td>Jahr</td>
                  <td>Preis</td>
                  <td>Fläche</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2016</td>
                  <td>50.000 &euro;</td>
                  <td>92m</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>50.000 &euro;</td>
                  <td>92m</td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>50.000 &euro;</td>
                  <td>92m</td>
                </tr>
              </tbody>
            </table>
          </PreviewBox>
        </div>
      </div>
    </div>
  </Page>);
