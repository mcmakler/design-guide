import React, { Component } from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';
import MiniMap from '../MiniMapComponent/MiniMap.component';

import { html } from './snippets/minimap.snippet';

export default class MiniMapPage extends Component {

  render() {
    return (
      <Page
        title="MiniMap"
        className="minimap-page"
        subtitle="from google"
      >
        <section className="container page-section" >
          <div className="columns">
            <div className="column">
              <CodeSnippet language="html">
                { html }
              </CodeSnippet>
            </div>
            <div className="column">
              <PreviewBox>
                <MiniMap
                  isMarker
                  center={{ lat: 34.17223, lng: -118.37897 }}
                />
              </PreviewBox>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
