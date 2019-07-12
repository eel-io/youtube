import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '@commonScss';
import Home from '@comp/home';
import Popular from '@comp/popular';
import Subscribe from '@comp/subscribe';
import Inbox from '@comp/inbox';
import Media from '@comp/media';
import Page404 from '@comp/common/page-404';

interface IProps {};
interface IState {};

const AppRoute = (props: IProps, state: IState) => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/popular" component={Popular} />
        <Route exact={true} path="/subscribe" component={Subscribe} />
        <Route exact={true} path="/inbox" component={Inbox} />
        <Route exact={true} path="/media" component={Media} />
        <Route component={Page404} />
      </Switch>
    </Router>
  )
}

export default AppRoute;
