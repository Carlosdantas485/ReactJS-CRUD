import React, {useState} from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


function Login() {
  const History = useHistory();

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [acessType, setAcessType] = useState('');

  async function handleEdit(idUser){
    const token = await localStorage.getItem('token');
    const response = await api.put('/adm_panel/manager/')
  }

  async function handleNewUser(){
    const token = await localStorage.getItem('token');
    
    const data = {
      username,
      first_name: firstName,
      password,
      phone,
      acess_type: acessType,
    }
    
    try{
      const response = await api.post('/adm_panel/manager/', data, {
       
      headers: {
          Authorization: `JWT ${token}`,

        },
      });
      console.log(response);
      toast.success('Usuário criado');
    History.push('/listagem');

    }
    catch(err){
      toast.error('Usuário não criado');
    }
  }
  return (
    <>
    <Container>
      <p>username</p>
      <input type="text" value={username} onChange={(response) => setUsername(response.target.value)}/>
     
      <p>primeiro nome</p>
      <input type="text" value={firstName} onChange={(response) => setFirstName(response.target.value)}/>
      
      <p>senha</p>
      <input type="text" value={password} onChange={(response) => setPassword(response.target.value)}/>
      
      <p>telefone</p>
      <input type="text" value={phone['']} onChange={(response)=> setPhone(response.target.value)}/>
      
      <button onClick={handleNewUser}>Criar</button>
    </Container>
    </>
  );
}

export default Login;
