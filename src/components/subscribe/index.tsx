import React, { useEffect } from 'react';

import useModal from '@/components/hooks/use-modal';
import AppNav from '@comp/common/app-nav';

interface IProps {};
interface IState {};

const Subscribe = (props: IProps, state: IState) => {
  const { isModal, toggleModal } = useModal();

  useEffect(() => {
    console.log('Subscribe props: ', props);
  }, []);

  return (
    <div>
      <p onClick={toggleModal}>Subscribe Page::</p>

      <ul className={isModal ? '' : 'none'}>
        <li>React</li>
        <li>React-Router-Dom</li>
        <li>Mobx</li>
        <li>TypeScript</li>
        <li>Material-UI</li>
      </ul>

      <AppNav value="subscribe" />
    </div>
  )
}

export default Subscribe;
