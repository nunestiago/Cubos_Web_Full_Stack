import { Button, Divider, Typography } from '@material-ui/core';
import React from 'react';

import { SideBar } from '../../components';
import CustomCard from '../../components/CustomCard/CustomCard';
import useStyles from './styles';

function StoreProducts() {
  const classes = useStyles();
  return (
    <>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div className={classes.root}>
          <Typography variant='h3' className={classes.title}>
            Nome da loja
          </Typography>
          <Typography variant='h4' className={classes.subtitle}>
            Seus produtos
          </Typography>
          <CustomCard />
          <Divider className={classes.divider} />
          <Button variant='contained' color='primary'>
            Adicionar produto
          </Button>
        </div>
      </div>
    </>
  );
}

export default StoreProducts;
