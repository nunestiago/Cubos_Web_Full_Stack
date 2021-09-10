import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import useStyles from './styles';

interface Data {
  email: string;
  password: string;
}

function Login() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data: Data) {
    console.log(data);
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
                error={!!errors.email}
                {...register('email', {
                  required: 'E-mail obrigatório',
                })}
              />

              <PasswordInput
                label={'Senha'}
                error={!!errors.password}
                register={() =>
                  register('password', { required: 'Senha obrigatório' })
                }
              />

              <Button type='submit' color='primary' variant='contained'>
                Entrar
              </Button>

              <Typography
                variant='caption'
                display='block'
                style={{ width: '100%' }}
              >
                Primeira vez aqui? <Link to={'/cadastro'}>CRIE UMA CONTA</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Login;
