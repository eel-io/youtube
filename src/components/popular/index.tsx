import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

import AppNav from '@comp/common/app-nav';
import '@scss/popular/main';

interface IProps {};
interface IState {};

const Popular = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('popular props: ', props);
  }, []);

  return (
    <div className="popular-page">
      <p>Popular Page</p>
      <p>
        <Button variant="contained" color="primary">Portal</Button>
      </p>

      <AppNav value="popular" />
    </div>
  )
}

export default Popular;
