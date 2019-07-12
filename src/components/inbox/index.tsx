import React, { useEffect } from 'react';

import AppNav from '@comp/common/app-nav';

interface IProps {};
interface IState {};

const Inbox = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('Inbox props: ', props);
  }, []);

  return (
    <div>
      <p>Inbox Page</p>

      <AppNav value="inbox" />
    </div>
  )
}

export default Inbox;
