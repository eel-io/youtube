import React, { useEffect, ChangeEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import SubscribesIcon from '@material-ui/icons/Subscriptions';
import FolderIcon from '@material-ui/icons/Folder';
import WhatshotIcon from '@material-ui/icons/Whatshot'

interface IProps extends RouteComponentProps {
  history: any,
  value: string,
};
interface IState {};

const AppNav = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('app nav props: ', props);
  }, [])

  const changeNav = (ev: ChangeEvent, value: string) => {
    switch(value) {
      case 'popular':
        setTimeout(() => {
          props.history.push('popular');
        }, 300);
        break;
      case 'subscribe':
        setTimeout(() => {
          props.history.push('subscribe');
        }, 300);
        break;
      case 'inbox':
        setTimeout(() => {
          props.history.push('inbox');
        }, 300);
        break;
      case 'media':
        setTimeout(() => {
          props.history.push('media');
        }, 300);
        break;
      default:
        setTimeout(() => {
          props.history.push('/');
        }, 300);
    }
  }

  return (
    <BottomNavigation
      value={props.value}
      showLabels={true}
      onChange={changeNav}>
      <BottomNavigationAction
        label="首页"
        value="home"
        icon={<HomeIcon />} />
      <BottomNavigationAction
        label="时下流行"
        value="popular"
        icon={<WhatshotIcon />} />
      <BottomNavigationAction
        label="订阅内容"
        value="subscribe"
        icon={<SubscribesIcon />} />
      <BottomNavigationAction
        label="收件箱"
        value="inbox"
        icon={<MailIcon />} />
      <BottomNavigationAction
        label="媒体库"
        value="media"
        icon={<FolderIcon />} />
    </BottomNavigation>
  )
}

export default withRouter(AppNav);
