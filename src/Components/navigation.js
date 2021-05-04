import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './landing';
import Dashboard from './dashboard';

const Navigation = () => (
  <Router>
    <Route exact path="/" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>
);

export default Navigation;