import React, { useEffect } from 'react';
import { Divider } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AppHeader from '@comp/common/app-header';
import AppNav from '@comp/common/app-nav';
import List from './list';
import Options from './options';

interface IProps {};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dividerStyle: {
      background: '#333',
    },
  }),
);

const Media = (props: IProps, state: IState) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('Media props: ', props);
  }, []);

  return (
    <div>
      <AppHeader />

      <section className="app-paper">
        <List />
        <p>999</p>
        <Divider className={classes.dividerStyle} />
        <Options />
      </section>

      <AppNav value="media" />
    </div>
  )
}

export default Media;
