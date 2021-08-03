import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useForm } from 'react-hook-form';

import { PasswordField } from '../../components';
import useStyles from './styles';

export default function Register() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function handleRegistration(data) {
    console.log(data);
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
                {...register('userName', {
                  required: "Campo 'Usuário' obrigatório ",
                })}
              />
              <TextField
                id='storename'
                label='Nome da loja'
                type='text'
                {...register('storeName', {
                  required: "Campo 'Nome da Loja' obrigatório ",
                })}
              />
              <TextField
                id='email'
                label='E-mail'
                type='email'
                {...register('email', {
                  required: "Campo 'E-mail' obrigatório ",
                })}
              />
              <PasswordField label='Senha' {...register('password')} />
              <PasswordField
                label='Repita a senha'
                {...register('passwordConfirmation', {
                  required: 'Confirma a senha!',
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return password === value || 'Senhas não confere!';
                    },
                  },
                })}
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
