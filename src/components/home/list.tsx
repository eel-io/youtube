import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';

interface IProps extends RouteComponentProps {};
interface IState {};

const List = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('list props: ', props);
  }, []);

  return (
    <Card square={true}>
      <CardMedia
        component="video"
        controls={true}
        height="230"
        src="https://vjs.zencdn.net/v/oceans.mp4" />
        {/* src="https://www.runoob.com/try/demo_source/movie.mp4" /> */}
        {/* src="http://localhost:3000/video/oceans.mp4" /> */}
      <CardActionArea>
        <CardContent>
          <Typography variant="body1">
            NO EXCUSES - Best Motivational Video
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withRouter(List);
