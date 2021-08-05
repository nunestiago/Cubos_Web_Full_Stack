import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { PasswordField } from '../../components';
import { emailRegex } from '../../utils/emailRegex';
import useStyles from './styles';

export default function Register() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const myRef = useRef(null);

  function handleLogin(data) {
    console.log(data);
    console.log(myRef);
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
                    value: emailRegex,
                    message: 'E-mail inválido',
                  },
                })}
              />

              <PasswordField
                label={'Senha'}
                register={() =>
                  register('password', { required: 'Senha obrigatório' })
                }
              />

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
