import React, { ReactNode, MutableRefObject } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import store from '@store/common/cover';
import CoverPortal from './cover-portal';

interface IProps extends RouteComponentProps {
  children: ReactNode,
  coverRef?: MutableRefObject<any>,
};
interface IState {};

const useStyles = makeStyles({
  paper: {
    background: 'none',
  },
  typography: {
    padding: '0.6rem',
  },
});

const AppCover = (props: IProps, state: IState) => {
  const classes = useStyles();

  return (
    <CoverPortal>
      <div ref={props.coverRef}
        className={store.isCover ? "app-cover" : "none"}>
        <section className="app-cover__header">
          <Paper square={true} className={classes.paper}>
            <Typography variant="button" className={classes.typography}>
              <Icon color="secondary" onClick={store.toggleCover}>close</Icon>
            </Typography>
          </Paper>
        </section>
        <>{props.children}</>
      </div>
    </CoverPortal>
  )
}

export default withRouter(observer(AppCover));
