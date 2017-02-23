import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import '../../polyfills/grid';

import Navigation from './Navigation/Navigation.component';
import GridPage from './GridPage/GridPage.component';

import './App.scss';

const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Navigation />
      <Switch>
        <Route path="/grid" component={GridPage} />
      </Switch>
    </div>
  </Router>
);
