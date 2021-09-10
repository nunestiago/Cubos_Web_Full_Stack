import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect } from 'react';

import useStyles from './styles';

function CustomAlert({ errors }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(true);
    if (Object.keys(errors).length === 0) {
      return null;
    }
    if (Object.keys(errors).length !== 0) {
      setOpen(true);
    }
    return () => {
      setOpen(false);
    };
  }, [errors]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      {Object.keys(errors).map((item) => (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity='error' className={classes.alert}>
            {errors[item].message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}

export default CustomAlert;