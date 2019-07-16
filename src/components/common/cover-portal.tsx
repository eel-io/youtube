import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  children: ReactNode,
};
interface IState {};

const CoverPortal = (props: IProps, state: IState) => {

  return createPortal(
    <>{props.children}</>,
    document.getElementById('cover') as HTMLElement,
  )
}

export default withRouter(CoverPortal);
