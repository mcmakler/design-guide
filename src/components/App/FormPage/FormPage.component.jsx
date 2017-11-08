import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { cssInput, htmlRadio, cssRadio, htmlSelect, cssSelect } from './snippets/form.snippet';

import './FormPage.scss';

export default () => (

  <Page
    title="FormPage"
    className="form-page"
    subtitle="This is how form shall look like"
  >
    <div className="container">
      <div className="page-section">
        <header>
          <h2 className="heading heading_secondary">Text input</h2>
        </header>
        <div className="columns">
          <div className="column">
            <CodeSnippet language="css">
              { cssInput }
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
      </div>
      <hr />
      <div className="page-section">
        <header>
          <h2 className="heading heading_secondary">Radio Buttons</h2>
        </header>
        <div className="columns">
          <div className="column">
            <CodeSnippet language="html">
              { htmlRadio }
            </CodeSnippet>
          </div>
          <div className="column">
            <CodeSnippet language="css">
              { cssRadio }
            </CodeSnippet>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PreviewBox className="center">
              <div className="FormPage__form">
                <div className="radio--styled">
                  <input
                    type="radio"
                    id="radio_gender_0"
                    name="radio_gender_[gender]"
                    required="required"
                    value="0"
                    checked="checked"
                  />
                  <label className="radio__label--styled" htmlFor="radio_gender_0">
                    Frau
                  </label>
                </div>
                <div className="radio--styled">
                  <input
                    type="radio"
                    id="radio_gender_1"
                    name="radio_gender_[gender]"
                    required="required"
                    value="1"
                  />
                  <label htmlFor="radio_gender_1" className="radio__label--styled">
                    Herr
                  </label>
                </div>
              </div>
            </PreviewBox>
          </div>
        </div>
      </div>
      <hr />
      <div className="page-section">
        <header>
          <h2 className="heading heading_secondary">Selects</h2>
        </header>
        <div className="columns">
          <div className="column">
            <CodeSnippet language="html">
              { htmlSelect }
            </CodeSnippet>
          </div>
          <div className="column">
            <CodeSnippet language="css">
              { cssSelect }
            </CodeSnippet>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PreviewBox>
              <div>
                <div className="styledSelect" >
                  <select className="styledSelect__select">
                    <option>Berlin</option>
                    <option>Mieten</option>
                    <option>Preis ab 21939208109€</option>
                    <option>ab 2 Zimmer</option>
                  </select>
                  <i className="styledSelect__icon" />
                </div>
              </div>
              <div>
                <div className="styledSelect styledSelect--secondary" >
                  <select className="styledSelect__select">
                    <option>Berlin</option>
                    <option>Mieten</option>
                    <option>Preis ab 21939208109€</option>
                    <option>ab 2 Zimmer</option>
                  </select>
                  <i className="styledSelect__icon" />
                </div>
              </div>
            </PreviewBox>
          </div>
        </div>

      </div>
    </div>
  </Page>);
