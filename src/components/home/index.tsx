import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

import AppHeader from '@comp/common/app-header';
import AppNav from '@comp/common/app-nav';

interface IProps {};
interface IState {};

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('home props:: ', props);
  }, []);

  return (
    <div>
      <AppHeader />

      <p>Home Page</p>
      <ul>
        <li>
          <Button variant="contained" color="primary">Primary Button</Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">Secondary Button</Button>
        </li>
      </ul>

      <AppNav value="home" />
    </div>
  )
}

export default Home;
