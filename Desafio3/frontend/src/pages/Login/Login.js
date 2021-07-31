import {
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import useStyles from './styles';

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = useState({
    login: '',
    password: '',
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  function handleLogin(data) {
    console.log(data);
  }
  console.log(errors);
  return (
    <Container maxWidth='sm'>
      <Paper className={classes.container} elevation={12}>
        <Typography variant='h4' align='center'>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
          <FormControl>
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
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='standard-adornment-password'>Senha</InputLabel>
            <Input
              id='standard-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Senha obrigatório' })}
              fullWidth
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div>
            {errors.email?.message && (
              <Alert severity='error'>{errors.email?.message}</Alert>
            )}

            {errors.password?.message && (
              <Alert severity='error'>{errors.password?.message}</Alert>
            )}

            <Button type='submit' color='primary' variant='contained'>
              Entrar
            </Button>
          </div>
        </form>
        <Typography variant='caption'>
          Primeira vez aqui?
          {/* <a href='#'>CRIE UMA CONTA</a>{' '} */}
        </Typography>{' '}
      </Paper>
    </Container>
  );
}
