import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { PasswordField } from '../../components';
import useStyles from './styles';

export default function Register() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const myRef = useRef(null);

  function handleLogin(data) {
    console.log(data);
    console.log(myRef);
    reset();
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant='h4' gutterBottom={true}>
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
              <TextField
                label='E-mail'
                fullWidth
                autoFocus
                type='email'
                {...register('email', {
                  required: 'E-mail obrigatório',
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: 'E-mail inválido',
                  },
                })}
              />

              <PasswordField inputlabel={'Senha'} {...register('password')} />
              {/* TODO returns undefined */}

              {errors.email?.message && (
                <Alert severity='error'>{errors.email?.message}</Alert>
              )}

              {errors.password?.message && (
                <Alert severity='error'>{errors.password?.message}</Alert>
              )}
              <Button type='submit' color='primary' variant='contained'>
                CRIAR CONTA
              </Button>
              <Typography variant='caption' display='block'>
                Primeira vez aqui? CRIE UMA CONTA
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
