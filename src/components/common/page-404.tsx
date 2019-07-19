import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import '@scss/common/page404';

interface IProps extends RouteComponentProps {};
interface IState {};

const Page404 = (props: IProps, state: IState) => {

  const onBack = () => {
    props.history.goBack();
  }

  return (
    <div className="page-404">
      <ul>
        <li>
          <p>Page Not Found!</p>
        </li>
        <li>
          <Link to="/">
            <Button variant="contained" color="secondary">Back to Home</Button>
          </Link>
        </li>
        <li>
          <Button variant="contained" color="secondary"
            onClick={onBack}>Back to Previous</Button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Page404);
