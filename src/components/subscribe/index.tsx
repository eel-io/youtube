import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

import '@scss/subscribe/main';
import useModal from '@/components/hooks/use-modal';
import AppNav from '@comp/common/app-nav';
import AppCover from '@comp/common/app-cover';
import store from '@store/common/cover';

interface IProps {};
interface IState {};

const Subscribe = (props: IProps, state: IState) => {
  const { isModal, toggleModal } = useModal();

  useEffect(() => {
    console.log('Subscribe props: ', props);
  }, []);

  return (
    <div className="subscribe-page">
      <p>
        <Button variant="contained" color="primary"
          onClick={toggleModal}>点击试一试</Button>
      </p>

      <ul className={isModal ? '' : 'none'}>
        <li>React</li>
        <li>React-Router-Dom</li>
        <li>Mobx</li>
        <li>TypeScript</li>
        <li>Material-UI</li>
      </ul>

      <p>
        <Button variant="contained" color="primary"
          onClick={store.toggleCover}>Open Cover</Button>
      </p>

      <AppCover>
        <ul>
          <li>谷歌</li>
          <li>微软</li>
          <li>Facebook</li>
          <li>阿里巴巴</li>
          <li>腾讯</li>
          <li>字节跳动</li>
        </ul>
      </AppCover>

      <AppNav value="subscribe" />
    </div>
  )
}

export default Subscribe;
