import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@comp/home';
import '@commonScss';

interface IProps {};
interface IState {};

const AppRoute = (props: IProps, state: IState) => {
  return (
    <Router>
      <Switch>
        <Route exact={true} component={Home} />
      </Switch>
    </Router>
  )
}

export default AppRoute;
