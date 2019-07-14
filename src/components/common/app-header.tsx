import React, { useEffect, MouseEvent } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Icon, IconButton } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import CastConnected from '@material-ui/icons/CastConnected';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

import HideOnScroll from './hide-on-scroll';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const styles = {
  typography: {
    justifyContent: 'space-between',
  },
  iconStyle: {
    padding: '1Px 4Px',
    borderRadius: '3Px',
    fontSize: '1.5rem',
    background: pink['A400'],
  },
  iconButton: {
    padding: '0.8rem',
  },
  iconColor: {
    color: '#fff',
  },
};

const AppHeader = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('app header :: ', props);
  }, []);

  const onCast = (ev: MouseEvent) => {
    console.log('cast connected');
  }

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="inherit" style={styles.typography}>
            <p>
              <Icon style={styles.iconStyle}>play_arrow</Icon>
              <b>&nbsp;YouTube</b>
            </p>
            <section>
              <IconButton  onClick={onCast} style={styles.iconButton}>
                <CastConnected style={styles.iconColor} />
              </IconButton>
              <Link to="/upload">
                <IconButton style={styles.iconButton}>
                  <VideocamIcon style={styles.iconColor} />
                </IconButton>
              </Link>
              <Link to="/search">
                <IconButton style={styles.iconButton}>
                  <SearchIcon style={styles.iconColor} />
                </IconButton>
              </Link>
              <Link to="/my">
                <IconButton style={styles.iconButton}>
                  <PersonIcon style={styles.iconColor} />
                </IconButton>
              </Link>
            </section>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default withRouter(AppHeader);
