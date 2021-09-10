import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Register } from './pages';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/cadastro' exact component={Register} />
      </Switch>
    </Router>
  );
}

export default Routes;
