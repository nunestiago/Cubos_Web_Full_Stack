import { Button, ButtonBase } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();
  return (
    <div>
      Olá, esse é o Market Cilíndro
      <ButtonBase>
        <Button onClick={() => history.push('store')}>Lojas</Button>
        <Button onClick={() => history.push('login')}>Login</Button>
        <Button onClick={() => history.push('register')}>Registrar</Button>
      </ButtonBase>
    </div>
  );
}

export default Home;
