import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import StyledSelect from '../StyledSelect/StyledSelect.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';

import { cssInput, htmlRadio } from './snippets/form.snippet';

import './FormPage.scss';

const selectOptions = [
  {
    id: 1,
    option: 'Berlin',
  },
  {
    id: 2,
    option: 'Mieten',
  },
  {
    id: 3,
    option: 'Preis bis 22193€',
  },
  {
    id: 4,
    option: 'ab 2 Zimmer',
  },
];

export default () => (

  <Page
    title="FormPage"
    className="form-page"
    subtitle="This is how form shall look like"
  >
    <div className="container page-section" >
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
      <hr />
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { htmlRadio }
          </CodeSnippet>
        </div>
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
      <hr />
      <div className="columns">
        <div className="column">
          <PreviewBox>
            <div>
              <StyledSelect
                options={selectOptions}
                kind="primary"

              />
            </div>
            <div>
              <StyledSelect
                options={selectOptions}
                kind="secondary"
              />
            </div>
          </PreviewBox>
        </div>
      </div>
    </div>
  </Page>);
