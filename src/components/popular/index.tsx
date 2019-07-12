import React, { useEffect } from 'react';

import AppNav from '@comp/common/app-nav';

interface IProps {};
interface IState {};

const Popular = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('popular props: ', props);
  }, []);

  return (
    <div>
      <p>Popular Page</p>

      <AppNav value="popular" />
    </div>
  )
}

export default Popular;
