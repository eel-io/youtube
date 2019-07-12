import React from 'react';

import AppTheme from '@comp/common/app-theme';
import AppRoot from '@comp/common/app-root';
import AppRoute from '@comp/common/app-route';

interface IProps {};
interface IState {};

const App = (props: IProps, state: IState) => (
  <AppTheme>
    <AppRoot>
      <AppRoute />
    </AppRoot>
  </AppTheme>
)

export default App;
