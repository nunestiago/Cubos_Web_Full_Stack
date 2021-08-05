import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { DeleteDialog } from '..';
import useStyles from './styles';

function CustomCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <DeleteDialog />
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='240'
          image='http://loremflickr.com/240/230'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.cardTitle}
          >
            Lizard
          </Typography>
          <Typography variant='caption' color='#222222' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <div className={classes.cardBottom}>
            <Typography
              variant='overline'
              color='rgba(101, 101, 101, 0.855)'
              component='p'
            >
              3 unidades
            </Typography>
            <Typography variant='body2' color='#222222' component='p'>
              R$ 9999
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CustomCard;
