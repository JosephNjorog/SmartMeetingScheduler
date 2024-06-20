import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
