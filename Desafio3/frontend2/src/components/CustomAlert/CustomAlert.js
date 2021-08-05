import { Alert } from '@material-ui/lab';
import React from 'react';

import useStyles from './styles';

function CustomAlert({ errors }) {
  const classes = useStyles();
  if (Object.keys(errors).length === 0) {
    return null;
  }

  return (
    <>
      {Object.keys(errors).map((item) => (
        <Alert severity='error' className={classes.alert}>
          {errors[item].message}
        </Alert>
      ))}
    </>
  );
}

export default CustomAlert;
