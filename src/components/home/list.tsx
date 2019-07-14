import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
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
        src="https://r9---sn-ni57dn7z.c.2mdn.net/videoplayback/id/1b1ff430f10dac18/itag/346/source/doubleclick_dmm/ctier/L/acao/yes/ip/0.0.0.0/ipbits/0/expire/3705611993/sparams/acao,ctier,expire,id,ip,ipbits,itag,mip,mm,mn,ms,mv,mvi,pl,source/signature/09EF92EF0E88FB974D6A2A82DA1C263C452146E4.7002F3060F04FE4E740142E1A21A765B668848C0/key/cms1/cms_redirect/yes/mip/118.31.4.6/mm/42/mn/sn-ni57dn7z/ms/onc/mt/1563032843/mv/u/mvi/8/pl/18?cpn=7ytQlsJwImjHx7u1&file=file.mp4" />
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
