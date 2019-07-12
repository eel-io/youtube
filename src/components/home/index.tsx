import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';

interface IProps {};
interface IState {};

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('home props:: ', props);
  }, []);

  return (
    <div>
      <p>Home Page</p>
      <ul>
        <li>
          <Button variant="contained" color="primary">Primary Button</Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">Secondary Button</Button>
        </li>
      </ul>
    </div>
  )
}

export default Home;
