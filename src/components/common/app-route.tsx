import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '@commonScss';
import Home from '@comp/home';
import Page404 from '@comp/common/page-404';

interface IProps {};
interface IState {};

const AppRoute = (props: IProps, state: IState) => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default AppRoute;
