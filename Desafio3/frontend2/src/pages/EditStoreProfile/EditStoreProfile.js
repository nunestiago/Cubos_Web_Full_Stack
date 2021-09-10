import { Button, Divider, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

import { PasswordField } from '../../components';
import useStyles from './styles';

function EditStoreProfile() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    console.log(errors);
  }

  return (
    <div className={classes.root}>
      <Typography variant='h3' className={classes.title}>
        Nome da loja
      </Typography>
      <Typography variant='h4' className={classes.subtitle}>
        Editar perfil
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id='storename'
          label='Seu nome'
          type='text'
          fullwidth
          className={classes.margin}
          {...register('username', {
            required: "'Nome da Loja' obrigatório ",
          })}
        />

        <TextField
          id='productDescription'
          label='Nome da loja'
          type='text'
          fullwidth
          className={classes.margin}
          {...register('productDescription')}
        />
        <TextField
          id='productDescription'
          label='E-mail'
          type='email'
          fullwidth
          className={classes.margin}
          {...register('productDescription')}
        />
        <PasswordField label='Senha' {...register('password')} />
        <PasswordField
          label='Repita a senha'
          {...register('passwordConfirmation', {
            required: 'Confirme a senha!',
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Senhas não confere!';
              },
            },
          })}
        />

        <div className={classes.footer}>
          <Divider className={classes.divider} />
          <Button variant='outlined' color='primary' type='submit'>
            Cancelar
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            Editar perfil
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditStoreProfile;
