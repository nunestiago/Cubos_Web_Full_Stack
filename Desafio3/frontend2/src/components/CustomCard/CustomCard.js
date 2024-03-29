import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { DeleteDialog } from '..';
import useStyles from './styles';

function CustomCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={item?.id ?? 1}>
      <CardActionArea>
        <DeleteDialog />
        <CardMedia
          component='img'
          alt={item?.name ?? 'Cadastre primeiro produto'}
          height='240'
          width='230'
          image={item?.image ?? 'http://loremflickr.com/240/230'}
          title={item?.name ?? 'Cadastre primeiro produto'}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.cardTitle}
          >
            {item?.name ?? 'Registre algo'}
          </Typography>
          <Typography variant='caption' color='#222222' component='p'>
            {item?.description ?? 'Cadastre primeiro produto'}
          </Typography>
          <div className={classes.cardBottom}>
            <Typography
              variant='overline'
              color='rgba(101, 101, 101, 0.855)'
              component='p'
            >
              {item?.stock ?? 0} unidades
            </Typography>
            <Typography variant='body2' color='#222222' component='p'>
              R$ {(item?.price / 100).toFixed(2) ?? 99.99}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CustomCard;
