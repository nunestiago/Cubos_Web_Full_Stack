import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { PasswordInput } from '../../components';
import useStyles from './styles';

interface RegisterData {
  username: string;
  storename: string;
  email: string;
  password: string;
}

function Register() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  async function handleRegistration(data: RegisterData) {}
  console.log(errors);
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
                {...register('username', {
                  required: "Campo 'Usuário' obrigatório ",
                })}
                error={!!errors.username}
                helperText={errors?.username?.message}
              />
              <TextField
                id='storename'
                label='Nome da loja'
                type='text'
                fullWidth
                error={!!errors.storename}
                helperText={errors?.storename?.message}
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
                helperText={errors?.email?.message}
                {...register('email', {
                  required: "Campo 'E-mail' obrigatório ",
                })}
              />
              <PasswordInput
                label='Senha'
                register={() =>
                  register('password', {
                    required: "Campo 'Senha' obrigatório ",
                  })
                }
                helperText={errors?.password?.message}
                error={!!errors.password}
              />
              <PasswordInput
                label='Repita a senha'
                error={!!errors.passwordConfirmation}
                helperText={errors?.passwordConfirmation?.message}
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

export default Register;
