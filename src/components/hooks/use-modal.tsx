import { useState } from 'react';

const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => setIsModal(!isModal);

  return {
    isModal,
    toggleModal,
  }
}

export default useModal;
