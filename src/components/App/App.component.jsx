import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Navigation from './Navigation/Navigation.component';
import GridPage from './GridPage/GridPage.component';
import TypographyPage from './TypographyPage/TypographyPage.component';

import './App.scss';

const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Navigation />
      <Switch>
        <Route path="/grid" component={GridPage} />
        <Route path="/typography" component={TypographyPage} />
      </Switch>
    </div>
  </Router>
);
