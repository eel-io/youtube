import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';

import AppNav from '@comp/common/app-nav';
import AppCover from '@comp/common/app-cover';
import store from '@store/common/cover';
import '@scss/popular/main';

interface IProps {};
interface IState {};

const Popular = (props: IProps, state: IState) => {
  const coverRef = useRef(null);

  useEffect(() => {
    console.log('popular props: ', props);
  }, []);

  const onCover = () => {
    store.toggleCover();
  }

  return (
    <div className="popular-page">
      <p>Popular Page</p>
      <p>
        <Button variant="contained" color="secondary"
          onClick={onCover}>Cover</Button>
      </p>

      <AppCover coverRef={coverRef}>
        <ul>
          <li>上海</li>
          <li>深圳</li>
          <li>广州</li>
          <li>成都</li>
          <li>杭州</li>
        </ul>
      </AppCover>

      <AppNav value="popular" />
    </div>
  )
}

export default Popular;
