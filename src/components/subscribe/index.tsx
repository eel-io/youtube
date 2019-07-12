import React, { useEffect } from 'react';

import AppNav from '@comp/common/app-nav';

interface IProps {};
interface IState {};

const Subscribe = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('Subscribe props: ', props);
  }, []);

  return (
    <div>
      <p>Subscribe Page</p>

      <AppNav value="subscribe" />
    </div>
  )
}

export default Subscribe;
