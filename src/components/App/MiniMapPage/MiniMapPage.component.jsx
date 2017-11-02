import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';
import CodeSnippet from '../CodeSnippet/CodeSnippet.component';
import MiniMap from '../MiniMapComponent/MiniMap.component';

import { html1, html2 } from './snippets/minimap.snippet';

export default() => (
  <Page
    title="MiniMap"
    className="minimap-page"
    subtitle="from google"
  >
    <section className="container page-section" >
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { html1 }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox>
            <MiniMap
              isMarkerShown={false}
              center={{ lat: 52.529784, lng: 13.401378 }}
            />
          </PreviewBox>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <CodeSnippet language="html">
            { html2 }
          </CodeSnippet>
        </div>
        <div className="column">
          <PreviewBox>
            <MiniMap
              isMarkerShown
              center={{ lat: 52.529784, lng: 13.401378 }}
            />
          </PreviewBox>
        </div>
      </div>
    </section>
  </Page>
);
