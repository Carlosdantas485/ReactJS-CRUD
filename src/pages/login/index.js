import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';

function Login() {
  const [username, setUsername] = useState('marina@florescerbrasil.com.br');
  const [password, setPassword] = useState('marina123');

  const History = useHistory();

  async function handleLogin(e){
  e.preventDefault();

    if (password.length > 0){
      const data = {
        username,
        password,
      }
      try{
        const response = await api.post('auth', data);

        localStorage.setItem('token', response.data);
        History.push('/listagem');

        console.log(response.data);

      }
      catch(err){
        alert('senha errada');
      }
    }
    else{
      alert('deu erro no condicional ');

    }
  }
  return (
    <>
    <Container>
      <form action="submit">
        <input type="text"
        value={username}
        onChange={(value) => setUsername(value.target.value)}
        />

        <input type="text"
        value={password}
        onChange={(value) => setPassword(value.target.value)}
        />
        <button type="submit" onClick={handleLogin}>Entrar</button>
      </form>

    </Container>
    </>
  );
}

export default Login;
