import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

interface LoadingProps {
  loading: boolean;
}

function Loading(props: LoadingProps) {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={props.loading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}

export default Loading;
