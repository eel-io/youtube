import React, { useEffect } from 'react';

import AppNav from '@comp/common/app-nav';

interface IProps {};
interface IState {};

const Media = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('Media props: ', props);
  }, []);

  return (
    <div>
      <p>Media Page</p>

      <AppNav value="media" />
    </div>
  )
}

export default Media;
