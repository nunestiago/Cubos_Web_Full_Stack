import { Button, Divider, Typography } from '@material-ui/core';
import React from 'react';

import CustomCard from '../../components/CustomCard/CustomCard';
import useStyles from './styles';

function Store() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' gutterBottom={true}>
        Nome da loja
      </Typography>
      <Typography variant='h4' gutterBottom={true}>
        Seus produtos
      </Typography>
      <CustomCard />
      <Divider className={classes.divider} />
      <Button variant='contained' color='primary'>
        Adicionar produto
      </Button>
    </div>
  );
}

export default Store;
