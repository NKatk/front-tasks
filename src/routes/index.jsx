import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EyesUser from '../containers/eyesUser';
import ListTasks from '../containers/listTasks';
import LogIn from '../containers/logIn';
import CreateChange from '../containers/createChange';
import NotFound from '../components/notFound';

const Routes = () => (
  <BrowserRouter>
    <EyesUser />
    <Switch>
      <Route exact path="/" component={ListTasks} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/createchange/:id?" component={CreateChange} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
