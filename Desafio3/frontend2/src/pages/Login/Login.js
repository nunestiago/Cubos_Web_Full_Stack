import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { CustomAlert } from '../../components';
import Loading from '../../components/Loading/Loading';
import PasswordField from '../../components/PasswordInput/PasswordInput';
import { UseAuth } from '../../context/provider';
import { emailRegex } from '../../utils/emailRegex';
import useStyles from './styles';

function Login() {
  const auth = UseAuth();
  const history = useHistory();
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    setApiError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const dataApi = await response.json();
      if (response.ok) {
        auth.setUser(dataApi);
        console.log(auth);
        history.push('/store');
        setLoading(false);
      }
      let err = new Error(dataApi);
      err.Status = 400;
      throw err;
    } catch (error) {
      setApiError('E-mail ou senha inválido');
      setLoading(false);
    }
  }

  return (
    <div className={classes.root}>
      <Loading loading={loading} />
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant='h4' gutterBottom={true}>
              Login {apiError}
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
                  pattern: {
                    value: emailRegex,
                    message: 'E-mail inválido',
                  },
                })}
              />

              <PasswordField
                label={'Senha'}
                error={!!errors.password}
                register={() =>
                  register('password', { required: 'Senha obrigatório' })
                }
              />

              {apiError && (
                <Alert severity='error' className={classes.alert}>
                  {apiError}
                </Alert>
              )}
              <CustomAlert errors={errors} />
              <Button type='submit' color='primary' variant='contained'>
                Entrar
              </Button>
              <Typography
                variant='caption'
                display='block'
                style={{ width: '100%' }}
              >
                Primeira vez aqui? <Link to={'/register'}>CRIE UMA CONTA</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default Login;
