import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Listagem from '../src/pages/list/index';
import Login from '../src/pages/login/index';
import Create from '../src/pages/create/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/listagem" component={Listagem} />
        <Route path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  );
}
