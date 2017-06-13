import React from 'react';

import Page from '../Page/Page.component';
import PreviewBox from '../PreviewBox/PreviewBox.component';

import './SectionsPage.scss';

const SectionsPageComponent = () => (
  <Page title="Page Sections" subtitle="This is what Page Sections should look like.">
    <section className="container page-section" >
      <PreviewBox>
        <div className="page-section">
          <h2 className="heading heading_secondary">Hola Mundo¡</h2>
          <h3 className="heading heading_tertiary">Ich kann auf Spanisch reden, digga!</h3>
          <p>This is a simple section with no graphic. </p>
        </div>
      </PreviewBox>
      <PreviewBox>
        <div className="page-section text-left">
          <h2 className="heading heading_secondary">Hola Mundo¡</h2>
          <h3 className="heading heading_tertiary">Ich kann auf Spanisch schreiben, digga!</h3>
          <p>This is a simple section with no graphic, but left-aligned text. WOOOO LEFT!</p>
        </div>
      </PreviewBox>
      <PreviewBox>
        <div className="page-section text-left">
          <div className="columns columns_center-vertical">
            <div className="column is-6">
              <h2 className="heading heading_secondary">Kaufvertrag</h2>
              <h3
                className="heading heading_tertiary"
              >
                Professionelle Vorbereitung und Interessen verbindende Moderation
              </h3>
              <p>
                Herzlichen Glückwunsch zum erfolgreichen Verkauf Ihrer
                Immobilie - Der Käufer wird durch den Verzicht auf
                versteckte Kosten im Kaufpreis von inflationierten
                Grunderwerbssteuern und Notargebühren bewahrt.
              </p>
            </div>
            <div className="column is-6">
              <img className="center-block" alt="Sup" src="https://www.mcmakler.de/images/pages/verkaufen/boardroom.jpg" />
            </div>
          </div>
        </div>
      </PreviewBox>
      <PreviewBox>
        <div className="page-section text-left">
          <div className="columns columns_center-vertical">
            <div className="column is-6">
              <img className="center-block" alt="Sup" src="https://www.mcmakler.de/images/pages/verkaufen/customer-care-admin-ui.jpg" />
            </div>
            <div className="column is-6">
              <h2 className="heading heading_secondary">Berichterstattung</h2>
              <h3
                className="heading heading_tertiary"
              >
                Regelmäßige Berichterstattung zum aktuellen Vermarktungsstand
              </h3>
              <p>
                Das Credo der täglichen Arbeit mit unseren Kunden
                bilden die regelmäßigen Reportings zu Vermarktungsstand
                und -aktivitäten, die direkte Information bei relevanten
                Ereignissen (Kaufpreisangebote, Vermarktungserkenntnisse,
                etc.) sowie die individuelle Abstimmung bei Ausweitung
                von Vermarktungsaktivitäten und erhöhter Publikation.
              </p>
            </div>
          </div>
        </div>
      </PreviewBox>
    </section>
  </Page>
);

export default SectionsPageComponent;
