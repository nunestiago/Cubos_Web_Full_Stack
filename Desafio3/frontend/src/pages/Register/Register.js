import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import useStyles from './styles';

export default function Register() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant='h4'>Criar uma conta</Typography>

            <Typography variant='caption'>
              Já possui uma conta? ACESSE
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
