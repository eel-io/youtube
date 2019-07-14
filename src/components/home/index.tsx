import React, { useEffect } from 'react';

import AppHeader from '@comp/common/app-header';
import AppNav from '@comp/common/app-nav';
import List from './list';
import '@scss/home/main';

interface IProps {};
interface IState {};

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('home props:: ', props);
  }, []);

  return (
    <div>
      <AppHeader />

      <section className="home-page app-paper">
        <p>Begin ---</p>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <p>End ---</p>
      </section>

      <AppNav value="home" />
    </div>
  )
}

export default Home;
