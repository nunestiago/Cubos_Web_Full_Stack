import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { PasswordField } from '../../components';
import useStyles from './styles';

export default function Register() {
  const history = useHistory();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  async function handleRegistration(data) {
    if (data.password !== data.passwordConfirmation) {
      setError('password', { type: 'validate' }, { shouldFocus: true });
      setError(
        'passwordConfirmation',
        { type: 'validate' },
        { shouldFocus: true }
      );
    }
    const response = await fetch('https://revisao-m03.herokuapp.com/usuarios', {
      method: 'POST',
      body: JSON.stringify({
        nome: data.userName,
        email: data.email,
        senha: data.password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    const dataAPI = await response.json();
    if (response.ok) {
      return history.push('/store');
    }
    console.log(dataAPI);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography variant='h4' gutterBottom={true}>
              Criar uma conta
            </Typography>
            <form
              className={classes.form}
              onSubmit={handleSubmit(handleRegistration)}
            >
              <TextField
                id='username'
                label='Seu nome'
                type='text'
                fullWidth
                {...register('userName', {
                  required: "Campo 'Usuário' obrigatório ",
                })}
                error={!!errors.userName}
              />
              <TextField
                id='storename'
                label='Nome da loja'
                type='text'
                fullWidth
                error={!!errors.storeName}
                {...register('storeName', {
                  required: "Campo 'Nome da Loja' obrigatório ",
                })}
              />
              <TextField
                id='email'
                label='E-mail'
                type='email'
                fullWidth
                error={!!errors.email}
                {...register('email', {
                  required: "Campo 'E-mail' obrigatório ",
                })}
              />
              <PasswordField
                label='Senha'
                register={() => register('password')}
                error={!!errors.password}
              />
              <PasswordField
                label='Repita a senha'
                error={!!errors.passwordConfirmation}
                register={() =>
                  register('passwordConfirmation', {
                    required: 'Confirme a senha!',
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || 'Senha não confere!';
                      },
                    },
                  })
                }
              />
              {errors.password && (
                <Alert severity='error'> {errors.password.message} </Alert>
              )}
              {errors.passwordConfirmation && (
                <Alert severity='error'>
                  {' '}
                  {errors.passwordConfirmation.message}{' '}
                </Alert>
              )}

              <Button type='submit' color='primary' variant='contained'>
                CRIAR CONTA
              </Button>
              <Typography variant='caption' display='block'>
                Já possui uma conta? ACESSE
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
