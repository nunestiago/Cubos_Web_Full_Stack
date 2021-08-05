import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { CustomAlert } from '../../components';
import Loading from '../../components/Loading/Loading';
import PasswordField from '../../components/PasswordInput/PasswordInput';
import useStyles from './styles';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
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
    setLoading(true);
    setLoading(false);

    if (data.password !== data.passwordConfirmation) {
      setError('password', { type: 'validate' }, { shouldFocus: true });
      setError(
        'passwordConfirmation',
        { type: 'validate' },
        { shouldFocus: true }
      );
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        body: JSON.stringify({
          username: data.username,
          storename: data.storename,
          email: data.email,
          password: data.password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const dataAPI = await response.json();
      if (!response.ok) {
        let err = new Error(dataAPI);
        err.Status = 400;
        throw err;
      }
      setLoading(false);
      history.push('/login');
    } catch (error) {
      setApiError('Houve algum erro');
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
                {...register('username', {
                  required: "Campo 'Usuário' obrigatório ",
                })}
                error={!!errors.username}
              />
              <TextField
                id='storename'
                label='Nome da loja'
                type='text'
                fullWidth
                error={!!errors.storename}
                {...register('storename', {
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
                register={() =>
                  register('password', {
                    required: "Campo 'E-mail' obrigatório ",
                  })
                }
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
              <CustomAlert errors={errors} />
              {apiError && (
                <Alert severity='error' className={classes.alert}>
                  {apiError}
                </Alert>
              )}

              <Button type='submit' color='primary' variant='contained'>
                CRIAR CONTA
              </Button>
              <Typography variant='caption' display='block'>
                Já possui uma conta? <Link to={'/login'}> ACESSE</Link>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
