import React, {useState} from 'react';

import { Container } from './styles';

function Login() {
  return (
    <>
    <Container>
      <input type="text"/>
      <input type="text"/>
      <button>Entrar</button>
    </Container>
    </>
  );
}

export default Login;
