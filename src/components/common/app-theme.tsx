import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import ThemeConfig from '@mixin/theme-config';

interface IProps {
  children: ReactNode,
};
interface IState {};


const AppTheme = (props: IProps, state: IState) => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      {props.children}
    </ThemeProvider>
  )
}

export default AppTheme;
