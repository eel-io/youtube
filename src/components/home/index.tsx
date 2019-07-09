import React, { useEffect } from 'react';

interface IProps {};
interface IState {};

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <p>Home Page</p>
    </div>
  )
}

export default Home;
