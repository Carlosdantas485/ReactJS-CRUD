import React,{useState,useEffect} from 'react';

import { Container } from './styles';

import api from'../../services/api';

function Login() {

  const [users, setUsers] = useState([]);

  async function handleList(){
    const token = localStorage.getItem('token');

    const response = await api.get('/adm_panel/manager/', {
      headers: { Authorization: `JWT ${token}`,
      },
    });

    console.log(response.data.managers);
    setUsers(response.data.managers);
  }

  useEffect(() => {
    handleList();
  },[]);

  return (
    <>
    <Container>
      {users.map((user) => (
        <div>
          <h1>ola mundo</h1>
          <h1>{user.nome_user}</h1>
          <h1>{user.email}</h1>
          <h1>{user.phone}</h1>
          <h1>{user.community}</h1>
          <h1>{user.acess_type}</h1>
        </div>
      ))}
    </Container>
    </>
  );
}

export default Login;
