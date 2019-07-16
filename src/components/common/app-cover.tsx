import React, { useEffect, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import store from '@store/common/cover';

interface IProps extends RouteComponentProps {
  children: ReactNode,
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

  useEffect(() => {
    console.log('app cover:: ', props);
  }, []);

  return (
    <div className={store.isCover ? "app-cover" : "none"}>
      <section className="app-cover__header">
        <Paper square={true} className={classes.paper}>
          <Typography variant="button" className={classes.typography}>
            <Icon color="secondary" onClick={store.toggleCover}>close</Icon>
          </Typography>
        </Paper>
      </section>
      <>{props.children}</>
    </div>
  )
}

export default withRouter(observer(AppCover));
