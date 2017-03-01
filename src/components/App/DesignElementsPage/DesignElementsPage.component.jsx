import React from 'react';

import Page from '../Page/Page.component';

import QuoteElement from './elements/QuoteElement/QuoteElement.component';
import QuestionElement from './elements/QuestionElement/QuestionElement.component';
import TabsElement from './elements/TabsElement/TabsElement.component';

import './DesignElementsPage.scss';

export default () => (
  <Page
    title="Design Elements"
    className="design-elements-page"
    subtitle="Elements used throughout the McMakler Website"
  >
    <div className="container" >
      <QuoteElement />
      <QuestionElement />
      <TabsElement />
    </div>
  </Page>);
