import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';

import useStyles from './styles';

const PasswordField = forwardRef((props, ref) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });
  // TODO when const showPassword false directly TOO MANY RERENDERS

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
      <Input
        id={props.label}
        type={values.showPassword ? 'text' : 'password'}
        ref={ref}
        name={props.name}
        onChange={props.onChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default PasswordField;
