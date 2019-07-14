import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  Paper,
  Typography,
  GridList,
  GridListTileBar,
  GridListTile,
} from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Pic11 from '@picture/11.jpg';

interface IProps extends RouteComponentProps {};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      flexDirection: 'column',
    },
    typography: {
      padding: '0.6rem 1rem',
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
  }),
);

const List = (props: IProps, state: IState) => {
  const classes = useStyles();

  return (
    <Paper square={true} className={classes.paper}>
      <Typography variant="body1" className={classes.typography}>最近</Typography>
      <GridList className={classes.gridList}>
        <GridListTile>
          <img src={Pic11} alt="11.jpg" />
          <GridListTileBar title="hello" />
        </GridListTile>
        <GridListTile>
          <img src={Pic11} alt="11.jpg" />
          <GridListTileBar title="hello" />
        </GridListTile>
        <GridListTile>
          <img src={Pic11} alt="11.jpg" />
          <GridListTileBar title="hello" />
        </GridListTile>
        <GridListTile>
          <img src={Pic11} alt="11.jpg" />
          <GridListTileBar title="hello" />
        </GridListTile>
        <GridListTile>
          <img src={Pic11} alt="11.jpg" />
          <GridListTileBar title="hello" />
        </GridListTile>
        <GridListTile>
          <img src={Pic11} alt="11.jpg" />
          <GridListTileBar title="hello" />
        </GridListTile>
      </GridList>
    </Paper>
  )
}

export default withRouter(List);

