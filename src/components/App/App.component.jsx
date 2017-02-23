import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation.component';
import GridPage from './GridPage/GridPage.component';

import './App.scss';

export default () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/grid" component={GridPage} />
      </Switch>
    </div>
  </Router>
);
