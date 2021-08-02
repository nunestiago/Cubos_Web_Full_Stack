import { Button, Divider, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';

function AddProducts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' gutterBottom={true}>
        Nome da loja
      </Typography>
      <Typography variant='h4' gutterBottom={true}>
        Adicionar produto
      </Typography>

      <Divider className={classes.divider} />
      <Button variant='contained' color='primary'>
        Adicionar produto
      </Button>
    </div>
  );
}

export default AddProducts;
