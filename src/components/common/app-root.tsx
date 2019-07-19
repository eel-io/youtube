import React, { ReactNode, useEffect } from 'react';
import VConsole from 'vconsole';

interface IProps {
  children: ReactNode,
};
interface IState {};

const AppRoot = (props: IProps, state: IState) => {

  useEffect(() => {
    // tslint:disable-next-line:no-unused-expression
    new VConsole();
  }, []);

  return (
    <>{props.children}</>
  )
}

export default AppRoot;