import React, { useEffect } from 'react';

import AppHeader from '@comp/common/app-header';
import AppNav from '@comp/common/app-nav';
import List from './list';

interface IProps {};
interface IState {};

const Media = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('Media props: ', props);
  }, []);

  return (
    <div>
      <AppHeader />

      <section className="app-paper">
        <List />
      </section>

      <AppNav value="media" />
    </div>
  )
}

export default Media;
