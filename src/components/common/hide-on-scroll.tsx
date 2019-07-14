import React, { useEffect, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  useScrollTrigger,
  Slide,
} from '@material-ui/core';

interface IProps extends RouteComponentProps {
  window?: () => Window,
  children: ReactNode,
};

const HideOnScroll = (props: IProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  useEffect(() => {
    console.log('Hide on scroll ::: ', props);
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
  )
}

export default withRouter(HideOnScroll);
