import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibaryIcon from '@material-ui/icons/VideoLibrary';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

interface IProps extends RouteComponentProps {};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconStyle: {
      color: '#fff',
    },
  }),
);

const Options = (props: IProps, state: IState) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('options page: ', props);
  }, []);

  const toHistory = (toUrl: string) => {
    setTimeout(() => {
      props.history.push(toUrl);
    }, 300);
  }

  return (
    <div className="options-page">
      <List>
        <ListItem button={true}
          onClick={() => toHistory('history')}>
          <ListItemIcon>
            <HistoryIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText primary="历史记录" />
        </ListItem>
        <ListItem button={true}
          onClick={() => toHistory('my_video')}>
          <ListItemIcon>
            <VideoLibaryIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText primary="我的视频" />
        </ListItem>
        <ListItem button={true}
          onClick={() => toHistory('buy_video')}>
          <ListItemIcon>
            <LocalOfferIcon className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText primary="购买的内容" />
        </ListItem>
      </List>
    </div>
  )
}

export default withRouter(Options);
